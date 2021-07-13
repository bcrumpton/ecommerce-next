import { buffer } from 'micro';
import * as admin from 'firebase-admin';
import { session } from 'next-auth/client';

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        project_id: 'two-a264b',
      }),
    })
  : admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_KEY;

const fulfillOrder = async (session) => {
  console.log('Fulfilling order');

  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to the db.`);
    });
};

const webhook = async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    // verify the event came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // fulfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook error: ${err.message}`));
    }
  }
};

export default webhook;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
