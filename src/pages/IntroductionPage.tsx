import './IntroductionPage.css'

export default function IntroductionPage() {
  return (
    <div className="introduction-page">
      <h1>The Elements</h1>
      <p className="subtitle">Euclid of Alexandria · c. 300 BCE</p>

      <section>
        <p>
          Euclid's <em>Elements</em> is one of the most influential works not just in the 
          history of mathematics but also in the history of Western philosophy and thought. 
          Starting from a handful of definitions, postulates, and common notions, the <em>Elements</em> constructs 
          sophisticated results through logical proof. It is a triumph of abstraction, 
          organizing ancient greek geometric knowledge into a single, rigorous, deductive framework 
          that would later be emulated in the construction of rigorous algebra and analysis.
        </p>
        <p>
          The <em>Elements</em> consists of thirteen books. The first six deal with plane geometry. 
          Books seven through nine cover basic number theory, book ten addresses irrational magnitudes,
          and the final three books explore solid geometry, ending with the
          construction of the five Platonic solids.
        </p>
      </section>

      <section>
        <h2>Book I</h2>
        <p>
          The first book covers the fundamentals of geometry and focuses on the theories of triangles, 
          parallels, and area, ending with a proof of the well known Pythagorean theorem (which you may never
          have had to prove before!). It also includes the postulates and common notions that will ground the
          entire system of geometry to be constructed.
        </p>
      </section>

      <section>
        <h2>How to use this explorer</h2>
        <p>
          Use the <strong>Next</strong> and <strong>Previous</strong> buttons at the
          bottom of each page to move through the material in order, or open the
          table of contents to jump to a specific section. On proposition pages,
          step through the diagrams to follow the proof at your own pace.
        </p>
      </section>
    </div>
  )
}
