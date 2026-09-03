---
title: ""
description: Life in pictures
---

<style>
/* ── Justified gallery ────────────────────────────────────────────────
   Each figure's flex-grow equals its aspect ratio and its basis is 0,
   so widths within a row come out proportional to aspect ratio. Since
   height = width / aspect, every picture in a row lands at exactly the
   same height and the row fills the full width with no gaps.
   Set --ar on each figure to (pixel width / pixel height).
   Add a <figcaption> only where a label is wanted; it is optional. */
.jgal            { margin: 0 0 3.5rem; }
.jgal .jrow      { display: flex; flex-wrap: wrap; line-height: 0; }

.jgal figure {
  position: relative;
  margin: 0;
  min-width: 0;
  overflow: hidden;
  flex: var(--ar) 1 0;
  aspect-ratio: var(--ar);
}
.jgal figure img,
.jgal figure iframe {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
}

.jgal figcaption {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 1.75rem 0.9rem 0.7rem;
  color: #fff;
  font-size: 0.85rem;
  line-height: 1.3;
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
  background: linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.35) 45%, rgba(0,0,0,0));
  pointer-events: none;   /* keeps the video controls clickable */
}

.jgal .year {
  text-align: center;
  margin: 0 0 1.25rem;
}

@media (max-width: 767.98px) {
  .jgal figure   { flex: 1 1 50%; }
  .jgal figcaption { font-size: 0.75rem; padding: 1.25rem 0.6rem 0.5rem; }
}
</style>

<div class="row">
  <div class="col-md-8 mx-auto text-center mb-5">
    <p class="lead"> Lab in pictures </p>
  </div>
</div>

<div class="jgal">

  <p class="lead year"> 2026 </p>

  <div class="jrow">
    <figure style="--ar: 0.75">
      <img src="/assets/img/Gallery/2026/2Dmotplastic-web.jpg" alt="2D MOT assembly in the cryostat" loading="lazy" decoding="async">
      <figcaption>2D MOT mock-up in the cryostat</figcaption>
    </figure>
    <figure style="--ar: 1.3333">
      <img src="/assets/img/Gallery/2026/2dmotattachment-web.jpg" alt="Attaching the 2D MOT" loading="lazy" decoding="async">
      <figcaption>Attaching the 2D MOT</figcaption>
    </figure>
    <figure style="--ar: 2.0253">
      <img src="/assets/img/Gallery/2026/2DMot-web.jpg" alt="First 2D MOT" loading="lazy" decoding="async">
      <figcaption>First 2D MOT</figcaption>
    </figure>
    <figure style="--ar: 0.75">
      <img src="/assets/img/Gallery/2026/CryoMOT-web.jpg" alt="The cryogenic MOT chamber" loading="lazy" decoding="async">
      <figcaption>The cryogenic MOT chamber</figcaption>
    </figure>
    <figure style="--ar: 0.75">
      <img src="/assets/img/Gallery/2026/Installing2DMot-web.jpg" alt="Installing the 2D MOT" loading="lazy" decoding="async">
      <figcaption>Installing the 2D MOT</figcaption>
    </figure>
  </div>

  <div class="jrow">
    <figure style="--ar: 0.7525">
      <img src="/assets/img/Gallery/2026/Kayaking1.jpg" alt="Lab kayaking trip" loading="lazy" decoding="async">
      <figcaption>Lab kayaking trip</figcaption>
    </figure>
    <figure style="--ar: 0.7525">
      <img src="/assets/img/Gallery/2026/Kayaking2.jpg" alt="Lab kayaking trip" loading="lazy" decoding="async">
    </figure>
    <figure style="--ar: 1.3333">
      <img src="/assets/img/Gallery/2026/Kayaking3.jpg" alt="Lab kayaking trip" loading="lazy" decoding="async">
    </figure>
    <figure style="--ar: 0.7525">
      <img src="/assets/img/Gallery/2026/LunchLab-web.jpg" alt="Lab lunch at Jupiter" loading="lazy" decoding="async">
      <figcaption>Jupiter</figcaption>
    </figure>
  </div>

  <p class="lead year" style="margin-top: 3rem;"> 2025 </p>

  <div class="jrow">
    <figure style="--ar: 1.7778">
      <iframe src="https://www.youtube.com/embed/p2RfcLvpRFw?rel=0" allowfullscreen title="Our custom optical dilution fridge"></iframe>
    </figure>
    <figure style="--ar: 0.75">
      <img src="/assets/img/Gallery/FridgeHana.jpg" alt="Fridge installation" loading="lazy" decoding="async">
      <figcaption>Our custom optical dilfridge is here — and now cold!</figcaption>
    </figure>
    <figure style="--ar: 0.75">
      <img src="/assets/img/Gallery/FridgeMireya.jpg" alt="Fridge installation" loading="lazy" decoding="async">
    </figure>
  </div>

  <div class="jrow">
    <figure style="--ar: 1.3281">
      <img src="/assets/img/Gallery/hiking5.JPG" alt="Hiking around campus" loading="lazy" decoding="async">
      <figcaption>Hiking around campus</figcaption>
    </figure>
    <figure style="--ar: 0.7529">
      <img src="/assets/img/Gallery/hiking2.JPG" alt="Hiking around campus" loading="lazy" decoding="async">
    </figure>
    <figure style="--ar: 0.7529">
      <img src="/assets/img/Gallery/hiking4.JPG" alt="Hiking around campus" loading="lazy" decoding="async">
    </figure>
  </div>

</div>

<div class="row">
  <div class="col-md-8 mx-auto text-center mb-5">
    <p class="lead"> Science in animations </p>
  </div>
</div>
<div class="row align-items-center">
  <div class="col-lg-4 col-md-6 mx-auto">
    <p>
      An illustration of the atomic ansemble trapped, cooled and loaded inside a hybrid optical and superconducting mm-wave cavity to mediate interactions between optical and mm-wave photons.
      Read more about our past work in Simon/Schuster labs in
      <a href="https://www.nature.com/articles/s41586-023-05740-2/" target="_blank">Nature</a>.
    </p>
  </div>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div class="video-16x9">
      <iframe src="https://www.youtube.com/embed/o_HkvfIfO-I?rel=0" allowfullscreen></iframe>
    </div>
  </div>
</div>


---

<div class="row align-items-center">
  <div class="col-lg-4 col-md-6 mx-auto">
    <p>
      A structure of Silicon Vacancy defect inside of a diamond lattice. The key advantage of SiV defects is their inversion symmetry, which makes them first order insensitive to electric field. This insensitivity allows us to embed these vacancies inside of nanophotonic structures with minimal decoherence.
      Read more about networking experiments we did in the Lukin group in
      <a href="https://www.science.org/doi/full/10.1126/science.add9771?casa_token=3DXi_yX-yMIAAAAA%3AUc6Y4JZiQla99Fc6SwgDq6YkgLhZfj1_-XeR_zW_U_QhpWLwPvM1VmAWi1jEG3Vziyo8IFseX6Oo/" target="_blank">Science</a>.
    </p>
  </div>
  <div class="col-lg-8 col-md-10 mx-auto">
    <div class="video-16x9">
      <iframe src="https://www.youtube.com/embed/TnSx_zl9m4Y?rel=0" allowfullscreen></iframe>
    </div>
  </div>
</div>

