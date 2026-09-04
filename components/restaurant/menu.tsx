'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Heart } from 'lucide-react';
import { restaurantMenu } from '@/lib/restaurant/menu';
import { restaurant } from '@/lib/restaurant/details';

export function RestaurantMenu() {
  const [active, setActive] = useState('breakfast');
  const category =
    restaurantMenu.find((item) => item.id === active) ?? restaurantMenu[0];
  return (
    <section
      className="lm-menu-section lm-shell"
      id="lm-menu"
      aria-labelledby="lm-menu-title"
    >
      <div className="lm-menu-heading" data-lm-reveal>
        <div>
          <p className="lm-eyebrow">02 / Algo rico para todos</p>
          <h2 id="lm-menu-title">
            What sounds <em>good?</em>
          </h2>
        </div>
        <p>
          Start with a favorite.
          <br />
          Find a new one. Make it your own.
        </p>
      </div>
      <fieldset className="lm-menu-categories" aria-label="Menu categories">
        {restaurantMenu.map((item) => (
          <button
            key={item.id}
            aria-pressed={active === item.id}
            aria-controls="lm-menu-items"
            onClick={() => setActive(item.id)}
          >
            {item.title}
            <sup aria-hidden="true">
              {String(item.items.length).padStart(2, '0')}
            </sup>
          </button>
        ))}
      </fieldset>
      <div className="lm-menu-layout">
        <div className="lm-menu-list" id="lm-menu-items">
          <div className="lm-category-intro" aria-live="polite">
            <h3 className="lm-handwritten">{category.spanish}</h3>
            <p>{category.intro}</p>
          </div>
          <ul
            key={active}
            className="lm-dishes"
            aria-label={`${category.title} menu`}
          >
            {category.items.map((item) => (
              <li key={item.name} className="lm-dish">
                <div className="lm-dish-name">
                  <h4>{item.name}</h4>
                  <span className="lm-dish-dots" />
                  <span className="lm-dish-price">
                    $
                    {Number.isInteger(item.price)
                      ? item.price
                      : item.price.toFixed(2)}
                  </span>
                </div>
                {item.note && <p>{item.note}</p>}
                {item.favorite && (
                  <span className="lm-favorite">
                    <Heart size={10} /> Worth a taste
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="lm-menu-fine">
            Prices from the restaurant’s published website menu, checked
            September 2026. Availability and ordering prices may differ.{' '}
            <a href={restaurant.menu} target="_blank" rel="noreferrer">
              View the source menu <ArrowUpRight size={11} />
            </a>
          </p>
        </div>
        <aside className="lm-menu-feature">
          <div className="lm-feature-photo">
            <Image
              unoptimized
              src="/images/las-mananitas/deluxe.webp"
              alt="Chilaquiles Deluxe topped with meat, Cotija and crema"
              width={1024}
              height={999}
              loading="lazy"
            />
            <span className="lm-feature-label">THE ONE TO COME BACK FOR</span>
          </div>
          <div className="lm-feature-copy">
            <span className="lm-handwritten">A little extra amor.</span>
            <h3>
              Make it
              <br />
              <em>Deluxe.</em>
            </h3>
            <p>
              Chilaquiles with your choice of meat. Because a good morning
              deserves a great breakfast.
            </p>
            <a
              className="lm-text-link"
              href={restaurant.order}
              target="_blank"
              rel="noreferrer"
            >
              Order from Clovis <ArrowUpRight size={17} />
            </a>
          </div>
        </aside>
      </div>
      <div className="lm-dinner-note">
        <div>
          <p className="lm-eyebrow">Staying for dinner?</p>
          <h3>There’s more at the table.</h3>
        </div>
        <a
          className="lm-button lm-button-outline"
          href={restaurant.order}
          target="_blank"
          rel="noreferrer"
        >
          Dinner & today’s full offering <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
