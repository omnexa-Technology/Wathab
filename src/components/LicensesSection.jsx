'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { sanityFetch } from '../lib/sanity'
import { getAllLicensesQuery } from '../lib/sanity/licenseQueries'
import { urlFor } from '../lib/sanity/image'

export function LicensesSection({ locale = 'ar' }) {
  const [licenses, setLicenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const isRTL = locale === 'ar'

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        setLoading(true)
        const query = getAllLicensesQuery(locale)
        const data = await sanityFetch(query)
        setLicenses(data || [])
      } catch (err) {
        console.error('Error fetching licenses:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLicenses()
  }, [locale])

  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <div className="animate-pulse space-y-20">
            <div className="h-16 bg-gray-200 rounded-lg mx-auto max-w-md"></div>
            {[1, 2].map((i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] bg-gray-200 rounded-lg"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <p className="text-red-600">Error loading licenses: {error}</p>
        </div>
      </section>
    )
  }

  if (!licenses.length) {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            {isRTL ? 'لا توجد تراخيص متاحة حالياً' : 'No licenses available at the moment'}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <header className="text-center mb-20">
          <h2 className="font-din font-medium text-[#0b2c16] text-4xl lg:text-[64px] leading-[64px] lg:leading-[108px]">
            {isRTL ? 'التراخيص والشهادات' : 'Licenses & Certifications'}
          </h2>
        </header>

        {/* License Items */}
        <div className="space-y-20">
          {licenses.map((item, index) => {
            // Debug: Console log image object
            console.log('License image object:', item.image)

            return (
              <div
                key={item._id}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* TEXT */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <h2 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.image?.alt || item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}