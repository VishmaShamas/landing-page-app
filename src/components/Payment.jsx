import React, { useState } from 'react';

const plans = {
  starter: { label: 'Starter', price: 9 },
  pro: { label: 'Pro', price: 29 },
  enterprise: { label: 'Enterprise', price: 99 },
};

export default function Payment({ plan = 'starter', onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(plan);
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');

  async function fakeCharge() {
    setLoading(true);
    try {
      // Simulate network latency
      await new Promise((r) => setTimeout(r, 1200));
      // Very fake TX id
      const txId = 'tx_' + Math.random().toString(36).slice(2, 10);
      onSuccess && onSuccess(txId);
      alert('Payment successful! TX: ' + txId);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      onError && onError(msg);
      alert('Payment failed: ' + msg);
    } finally {
      setLoading(false);
    }
  }

  const price = plans[selected].price;

  return (
    <section className='w-full max-w-xl mx-auto rounded-xl border p-6 shadow-sm bg-white dark:bg-neutral-900 dark:border-neutral-800'>
      <header className='mb-6'>
        <h2 className='text-2xl font-semibold'>Checkout</h2>
        <p className='text-sm text-neutral-500 mt-1'>
          Secure payment form (demo). No real card is charged.
        </p>
      </header>

      <div className='space-y-4'>
        <label className='block'>
          <span className='text-sm text-neutral-600'>Plan</span>
          <select
            className='mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700'
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {Object.entries(plans).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label} — ${v.price}/mo
              </option>
            ))}
          </select>
        </label>

        <label className='block'>
          <span className='text-sm text-neutral-600'>Email</span>
          <input
            type='email'
            className='mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className='block'>
          <span className='text-sm text-neutral-600'>Card</span>
          <input
            type='text'
            inputMode='numeric'
            className='mt-1 w-full rounded-md border px-3 py-2 dark:bg-neutral-900 dark:border-neutral-700'
            placeholder='4242 4242 4242 4242'
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
        </label>

        <button
          disabled={loading || !email || card.replace(/\s+/g, '').length < 16}
          onClick={fakeCharge}
          className='w-full rounded-md bg-black text-white py-2 font-medium disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:text-black'
        >
          {loading ? 'Processing...' : `Pay $${price}/mo`}
        </button>

        <p className='text-xs text-neutral-500 text-center'>
          Demo component. Replace with your real gateway (Stripe, etc).
        </p>
      </div>
    </section>
  );
}
