import React from 'react'
import './index.css'


export default function index() {
  return (
    <div className='container'>

      <div className="is-flex is-flex-direction-column is-align-items-center">
        <p className='is-size-6 has-text-info is-uppercase has-text-weight-medium m-2'>Technology</p>
        <h1 className='title has-text-white m-2 is-2 has-text-centered mb-4'>Every Next Level of Your Life Will Demand a Different You</h1>
        <div className="is-flex is-flex-direction-row">
          <div className="is-flex is-flex-direction-column">
            <p className='has-text-grey-lighter'>Mario Sanchez</p>
            <p className='has-text-grey-lighter'>October 21, 2022</p>
          </div>
          <div className='has-text-grey is-align-self-flex-end'>
            <p className='mr-2 ml-2'>• 8 min read</p>
          </div>
        </div>
        <img className='my-4' src="https://cdn.discordapp.com/attachments/1133439076641554453/1157261118943797359/2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg" alt="Placeholder image" />

        <div className='container is-max-desktop'>
          <p className='has-text-white  my-4'>Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight.

            Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it's no wonder that companies are considering structural rather than topical solutions to the challenges they face.

          </p>
          <p className='has-text-white my-4'>
            Yet the context in which brand architecture decisions are being made has changed. Gone are the days of “competitive strategy”, with the military-inspired view of competition as a zero-sum game, where market share needs to be stolen from competitors, often in a street-by-street battle to win over each individual segment. The type of brand architecture required to win in this game demanded a dogged focus on each segment, and a sniper-like collection of individual brands sharply focused on each one. While there was always a place for a variety of architectures — see Joachimsthaler's brand relationship spectrum — houses of brands were favored, as it enabled segment-by-segment competition and risk protection. P&G was the king of houses of brands, slicing and dicing the market not just by products and demographics, but also by psychographics, price range, buying patterns or attitudes. In B2B, houses of brands were omnipresent, with a product-driven logic that led to branding new features meant to provide short-term competitive advantage.
          </p>

        </div>
        <div>
          <hr/>
        </div>
      </div>

    </div>
  )
}
