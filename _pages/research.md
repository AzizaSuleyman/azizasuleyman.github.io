---
title: Research
subtitle: 
description: An overview of research topics we are currently pursuing
featured_image: /assets/img/ill/Sather_Gate.jpeg
---

<!-- ## Scientific directions -->
<div class="row">
        <div class="col-md-8 mx-auto text-center mb-5">
          <p class="lead"> Our science </p>
        </div>
</div>

Quantum technologies are moving from isolated demonstrations to systems that generate, process, and *route* quantum resources at scale. Our lab is dedicated to building **entanglement factories**: platforms that perform high-fidelity local quantum operations while also generating, distributing, and receiving entanglement through quantum input/output channels.

We pursue this goal in two complementary regimes: **short-distance entanglement factories** that interconnect heterogeneous modules within a machine, and **long-distance entanglement factories** that deliver deployable entanglement over fiber-scale links—enabling distributed quantum computing and long-baseline quantum sensing.

<!-- Entanglement Factories figure (place image at assets/img/pages/EntanglementFactories.png) -->
<div style="text-align:center; margin: 1.5rem 0;">
  <img src="/assets/img/pages/EntanglementFactories.png"
       alt="Entanglement factories: short-distance quantum motherboard and long-distance networked entanglement"
       style="max-width: 92%; height: auto;" />
  <p style="font-size: 0.95rem; margin-top: 0.6rem;">
    <em>Entanglement factories in two regimes: a short-distance “quantum motherboard” for heterogeneous module interconnects, and long-distance entanglement distribution over fiber-scale links.</em>
  </p>
</div>

<img src="/assets/img/pages/ApplicationsNetworks.png" alt="Future applications of distributed quantum systems" style="display: block; margin: 0 auto;" />

---

## Tools

**Entanglement (as a routable resource)**

In the last 100 years, entanglement has transformed from a paradox (1930s), to a phenomenon to be observed (1960s), and finally now to a resource to be harvested for powering quantum technology. In our work, entanglement is not just something to create and observe—it is something to **generate on demand, route with intent, and share across distance and hardware boundaries**, so that nonclassical correlations become a usable capability rather than a strictly local phenomenon.

**Flying qubits (photons across bands)**

Scaling quantum interconnects requires flying qubits that can transport quantum information between modules and across networks. Photons are the workhorse flying qubits, and we operate across regimes—from microwave (5–10 GHz) and millimeter wave (50–200 GHz) to optical (384 THz) and telecom (222 THz). Telecom photons are especially robust since they can travel via fibers at room temperature over ~15 km before losing half of their population, as compared to optical photons which only have ~700 m.

**Quantum interfaces and transduction**

Moving quantum states between matter qubits and photonic channels is fundamentally fragile: quantum information cannot be copied, and interface loss/noise directly limits performance. We develop **coherent interfaces**—including transduction when necessary—so that quantum states can be transferred, stored, and processed while preserving fidelity and enabling scalable networking.

---

## Platforms

In our group we work with multiple platforms because the central challenge is getting fundamentally different quantum systems to *talk to each other*. Some of the systems we are working on right now are trapped neutral atoms and high-frequency superconducting circuits. In the past we have worked on Silicon vacancy (SiV) defects in diamond nanophotonic cavities.

**Thrust 1: Short-distance “quantum motherboard.”** We build architectures that link superconducting circuits and neutral-atom arrays inside a cryogenic environment, combining ultrafast control and measurement with long-lived, programmable memory.

**Thrust 2: Long-distance entanglement factories.** We develop nanophotonic interfaces to neutral-atom arrays that generate atom–photon entanglement directly in the telecom band for distribution through deployed fiber networks, with robust atomic nodes for local storage and processing.

<div class="row">
    <div class="col-lg-5 col-md-6 mx-auto">
        <div class="card" style="padding: 5px;" data-background="full">
            <img class="card-img-top" src="/assets/img/pages/CircuitsMmwave1.png" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title"> Quantum motherboard: superconducting circuits + neutral atoms </h4>
                <p class="card-text">
                We integrate superconducting (transmon) processors with neutral-atom arrays via photonic interconnects, aiming for modular quantum machines that combine fast feedforward and measurement with long-lived, reconfigurable memory.
                </p>
            </div>
          </div>
        </div>
    <!-- <div class="col-lg-5 col-md-6 mx-auto">
            <div class="card" style="padding: 5px;" data-background="full">
                <img class="card-img-top" src="/assets/img/pages/Atomsin3Dcavities.png" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title"> Millimeter-wave links for modular quantum architectures </h4>
                    <p class="card-text">
                    We explore millimeter-wave photonic channels to connect heterogeneous cryogenic modules while allowing each subsystem to operate in its native optimum—enabling new regimes of hybrid processing and sensing.
                    </p>
                </div>
            </div>
      </div> -->
    <div class="col-lg-5 col-md-6 mx-auto">
          <div class="card" style="padding: 5px;" data-background="full">
              <img class="card-img-top" src="/assets/img/pages/AtomCavityArray.png" alt="Card image cap">
              <div class="card-body">
                  <h4 class="card-title"> Telecom atom–photon interfaces with nanophotonic cavities </h4>
                  <p class="card-text">
                  We develop cavity–array interfaces that generate high-rate atom–photon entanglement in the telecom band, distributing entanglement over deployed fiber while using neutral atoms as robust local quantum nodes for sensing and computation.
                  </p>
              </div>
          </div>
      </div>
  </div>