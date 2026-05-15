import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import PricingModal from '../components/PricingModal'
import { services } from '../data/services'
import { staggerContainer } from '../utils/animations'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewPricing = (service) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  return (
    <section id="services" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <SectionHeading
          badge="Our Services"
          title="Solutions That Drive Growth"
          subtitle="From pixel perfect websites to viral social campaigns. We deliver end to end digital excellence tailored to your goals."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onViewPricing={handleViewPricing}
            />
          ))}
        </motion.div>
        <PricingModal
          service={selectedService}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </section>
  )
}
