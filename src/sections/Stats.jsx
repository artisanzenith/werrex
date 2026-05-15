import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import { stats } from '../data/stats'

export default function Stats() {
  return (
    <section className="section-padding bg-gradient-to-b from-dark-900/50 to-dark-950 border-y border-white/5">
      <div className="container-custom">
        <SectionHeading
          badge="By The Numbers"
          title="Results That Speak"
          subtitle="Our track record demonstrates consistent excellence across every project we deliver."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
