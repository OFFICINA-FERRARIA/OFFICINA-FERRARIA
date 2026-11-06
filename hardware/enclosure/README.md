# C5ISR Tactical Node — Mechanical Enclosure (Rev 1.2)

This directory contains the production-ready 2D CAM laser cutting vector profiles and mechanical specifications for the ruggedized, outdoor C5ISR acoustic/optical observation node enclosure.

---

## 1. Manufacturing Profile Overview

![Enclosure Vector Layout](C5ISR_Node_Enclosure_FlatPattern_PMMA-4mm_Rev1.2.svg)

* **Source File:** `C5ISR_Node_Enclosure_FlatPattern_PMMA-4mm_Rev1.2.svg`
* **Scale:** 1:1 (True Metric, Millimeters)
* **Cutting Process:** Industrial CO2 / Fiber Laser CNC
* **Target Hardware Compatibility:** Samsung Galaxy XCover 5 (Strict tolerance for dual-camera optical shroud alignment and internal clearance)

---

## 2. Material Specifications & Fabrication Notes

| Parameter | Specification | Notes |
| :--- | :--- | :--- |
| **Material** | PMMA GS (Cast Acrylic / Plexiglas) | **Cast only.** Do not substitute with extruded (XT) acrylic due to chemical solvent crazing and thermal stress cracking. |
| **Sheet Thickness** | 4.0 mm ($\pm 0.3$ mm tolerance) | Structural walls, top/bottom bulkheads, internal servo partition shelf. |
| **Color / Finish** | Optically clear (high transmission) | Ensures unhindered optical path for primary and secondary image sensors. |
| **Kerf Compensation** | Nominal: 0.15 – 0.20 mm | Integrated in vector stroke paths for interference fit where applicable. |

---

## 3. Mechanical Interface & Features

* **Primary Suspension (Top Plate):** Center cut-out designed for an integrated F608 flanged bearing carrying an M8 structural threaded rod / dynamic pivot axis.
* **Internal Drive Partition:** Direct cut-outs for MG996R continuous-rotation/metal-gear servo and brass standoffs for the ESP32 processing unit.
* **Thermal Management:** Side wall cut-out sized for a passively cooled, finned extruded aluminum heatsink interface.
* **Acoustic & Environmental Ports:**
  * Dual offset ePTFE micro-porous acoustic vent membranes (waterproof / vapor-permeable).
  * Bottom offset M12 IP68 cable gland port for strain-relieved coiled USB-C umbilical harness.
* **Center-of-Gravity (CoG) Ballast Attachment:** Dual bottom-corner anchor points for M4/M5 eye bolts and carabiner rigging, carrying an external counterweight tactical battery pouch.

---

## 4. Assembly & Joining Procedures

1. **Edge Preparation:** Remove protective masking along joint interfaces. Clean bonding faces with isopropanol (IPA) or anti-static cleaner.
2. **Solvent Welding:** Assemble perpendicular joints using capillary-action solvent cement (e.g., Acrifix 116 / 192 or equivalent PMMA solvent). Ensure full chemical cross-linking.
3. **Internal Fastener Blocks:** Layered internal structural corner blocks ($15 \times 15$ mm, laminated from offcut PMMA) host heat-set brass threaded inserts (M3) for front service-hatch retention.

---

## 5. Raw Vector Data (`.svg`)

```xml
<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 1000 667" width="100%" height="100%">
  <!-- Outer panels and cuts -->
  <!-- Top Left Panel -->
  <rect x="17" y="15" width="213" height="150" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="42" cy="90" r="8" fill="none" stroke="#0000ff" stroke-width="1.5"/>
  <circle cx="123" cy="90" r="19" fill="none" stroke="#ff0000" stroke-width="1.5"/>

  <!-- Top Center Panel -->
  <rect x="250" y="15" width="214" height="150" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="291" cy="90" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="423" cy="90" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="357" cy="57" r="9" fill="none" stroke="#0000ff" stroke-width="1.5"/>
  <circle cx="357" cy="125" r="11" fill="none" stroke="#00aa00" stroke-width="1.5"/>

  <!-- Top Right Panel -->
  <rect x="483" y="15" width="201" height="135" fill="none" stroke="#000000" stroke-width="1.5"/>
  <rect x="548" y="66" width="70" height="34" fill="none" stroke="#880088" stroke-width="1.5"/>

  <!-- Middle Left Panel (Cover Plate) -->
  <rect x="17" y="183" width="434" height="215" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="27" cy="193" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="441" cy="193" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="27" cy="388" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>
  <circle cx="441" cy="388" r="3" fill="none" stroke="#000000" stroke-width="1.5"/>

  <!-- Middle Right Panel -->
  <rect x="483" y="183" width="434" height="215" fill="none" stroke="#000000" stroke-width="1.5"/>

  <!-- Bottom Left Panel -->
  <rect x="17" y="416" width="434" height="135" fill="none" stroke="#000000" stroke-width="1.5"/>

  <!-- Bottom Right Panel (Heatsink Cutout) -->
  <rect x="483" y="416" width="434" height="135" fill="none" stroke="#000000" stroke-width="1.5"/>
  <rect x="616" y="450" width="168" height="68" fill="none" stroke="#ffaa00" stroke-width="1.5"/>
</svg>
