// Stripe webhooks require the raw request body for signature verification.
// Disable Next.js body parsing for this route.
export const config = {
  api: {
    bodyParser: false,
  },
};

export { POST } from "./route";
