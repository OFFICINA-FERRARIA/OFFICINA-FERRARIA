<div dir="auto">
<h1 dir="auto">🇺🇸 / 🇵🇱 C5ISR Tactical Node — Mechanical Enclosure (Rev 1.2)</h1>
</div>

This directory contains the production-ready 2D CAM laser cutting vector profiles and mechanical specifications for the ruggedized, outdoor C5ISR acoustic/optical observation node enclosure.

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>
<div dir="auto">
<h1 dir="auto">🇵🇱 Węzeł Taktyczny C5ISR — Obudowa Mechaniczna (Rev 1.2)</h1>
</div>
Ten katalog zawiera gotowe do produkcji profile wektorowe CAM 2D do cięcia laserowego oraz specyfikacje mechaniczne dla wzmocnionej, zewnętrznej obudowy węzła obserwacji akustyczno-optycznej C5ISR.
</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 Hardware Components & Financial Transparency / Zamówione Podzespoły i Transparentność Finansowa</h2>
</div>

The core hardware components for this node have been successfully ordered and paid for. For full transparency, the raw PDF confirmations are available directly in this repository:
* 📄 [Kamami_2026-11-07.pdf](./Kamami_2026-11-07.pdf) - Order confirmation.
* 📄 [statement_202631200044149.pdf](./statement_202631200044149.pdf) - Paysafecard payment statement.

**Project Bill of Materials (BOM) & Costs** (Exchange rates via NBP, 2026-11-06: 1 USD = 3.93 PLN | 1 EUR = 4.39 PLN)

| Qty | Component | Unit Price (PLN) | Total (PLN) | Total (USD) | Total (EUR) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Servo MG996R](https://kamami.pl/serwa-giant/204180-servo-mg996r-5906623440627.html) | 19.54 zł | 19.54 zł | $4.97 | €4.45 |
| 1 | [XIAO ESP32S3 & Wio-SX1262 Kit (Meshtastic/LoRa)](https://kamami.pl/meshtastic/1194474-xiao-esp32s3-wio-sx1262-kit-zestaw-z-modulem-esp32s3-i-komunikacja-lora.html) | 62.16 zł | 62.16 zł | $15.82 | €14.16 |
| 2 | USB-A to USB-C Cable (1m, Black) | 5.08 zł | 10.16 zł | $2.59 | €2.31 |
| 1 | USB-C Adapter M-F (Angled, Side) | 9.16 zł | 9.16 zł | $2.33 | €2.09 |
| - | Shipping (InPost Paczkomat) | - | 13.90 zł | $3.54 | €3.17 |
| **-** | **TOTAL PAID** | **-** | **114.92 zł** | **$29.24** | **€26.18** |

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>

Kluczowe podzespoły sprzętowe dla tego węzła zostały pomyślnie zamówione i opłacone. W ramach pełnej transparentności finansowej projektu, surowe pliki PDF potwierdzające transakcję i wydatki zostały opublikowane bezpośrednio w tym repozytorium:
* 📄 [Kamami_2026-11-07.pdf](./Kamami_2026-11-07.pdf) - Potwierdzenie zamówienia.
* 📄 [statement_202631200044149.pdf](./statement_202631200044149.pdf) - Wyciąg płatności z konta Paysafecard.

**Zestawienie kosztów podzespołów** (Średni kurs NBP z dn. 2026-11-06: 1 USD = 3,93 PLN | 1 EUR = 4,39 PLN)

| Ilość | Podzespół | Cena jedn. (PLN) | Suma (PLN) | Suma (USD) | Suma (EUR) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Serwo MG996R](https://kamami.pl/serwa-giant/204180-servo-mg996r-5906623440627.html) | 19,54 zł | 19,54 zł | $4.97 | €4.45 |
| 1 | [Zestaw XIAO ESP32S3 & Wio-SX1262 Kit (Meshtastic/LoRa)](https://kamami.pl/meshtastic/1194474-xiao-esp32s3-wio-sx1262-kit-zestaw-z-modulem-esp32s3-i-komunikacja-lora.html) | 62,16 zł | 62,16 zł | $15.82 | €14.16 |
| 2 | Przewód USB typ A - USB typ C (1m, czarny) | 5,08 zł | 10,16 zł | $2.59 | €2.31 |
| 1 | Adapter USB typu C M-F (kątowy boczny) | 9,16 zł | 9,16 zł | $2.33 | €2.09 |
| - | Wysyłka (Paczkomat InPost) | - | 13,90 zł | $3.54 | €3.17 |
| **-** | **ZAPŁACONO W SUMIE** | **-** | **114,92 zł** | **$29.24** | **€26.18** |

</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 1. Manufacturing Profile Overview / Przegląd Profilu Produkcyjnego</h2>
</div>

![Enclosure Vector Layout](C5ISR_Node_Enclosure_FlatPattern_PMMA-4mm_Rev1.2.svg)

*   **Source File:** `C5ISR_Node_Enclosure_FlatPattern_PMMA-4mm_Rev1.2.svg`
*   **Scale:** 1:1 (True Metric, Millimeters)
*   **Cutting Process:** Industrial CO2 / Fiber Laser CNC
*   **Target Hardware Compatibility:** Samsung Galaxy XCover 5 (Strict tolerance for dual-camera optical shroud alignment and internal clearance)

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>
*   **Plik Źródłowy:** `C5ISR_Node_Enclosure_FlatPattern_PMMA-4mm_Rev1.2.svg`
*   **Skala:** 1:1 (Rzeczywiste wymiary metryczne, milimetry)
*   **Proces Cięcia:** Przemysłowy laser CNC CO2 / Fiber
*   **Kompatybilność Sprzętowa:** Samsung Galaxy XCover 5 (Ścisła tolerancja dla osłony optycznej podwójnego aparatu i wewnętrznego luzu)
</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 2. Material Specifications & Fabrication Notes / Specyfikacja Materiałowa</h2>
</div>

| Parameter | Specification | Notes |
| :--- | :--- | :--- |
| **Material** | PMMA GS (Cast Acrylic / Plexiglas) | **Cast only.** Do not substitute with extruded (XT) acrylic due to chemical solvent crazing and thermal stress cracking. |
| **Sheet Thickness** | 4.0 mm ($\pm 0.3$ mm tolerance) | Structural walls, top/bottom bulkheads, internal servo partition shelf. |
| **Color / Finish** | Optically clear (high transmission) | Ensures unhindered optical path for primary and secondary image sensors. |
| **Kerf Compensation** | Nominal: 0.15 – 0.20 mm | Integrated in vector stroke paths for interference fit where applicable. |

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>

| Parametr | Specyfikacja | Uwagi |
| :--- | :--- | :--- |
| **Materiał** | PMMA GS (Szkło akrylowe wylewane / Plexiglas) | **Tylko wylewane.** Nie zastępować akrylem wytłaczanym (XT) ze względu na ryzyko mikropęknięć od rozpuszczalników i naprężeń termicznych. |
| **Grubość Arkusza** | 4,0 mm (tolerancja $\pm 0,3$ mm) | Ściany konstrukcyjne, górne/dolne grodzie, wewnętrzna półka na serwo. |
| **Kolor / Wykończenie** | Optycznie przezroczysty (wysoka transmisja) | Zapewnia niezakłóconą ścieżkę optyczną dla głównego i dodatkowego obiektywu. |
| **Kompensacja Rzazu** | Nominalnie: 0,15 – 0,20 mm | Zintegrowana w ścieżkach wektorowych dla ciasnego spasowania tam, gdzie to konieczne. |

</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 3. Mechanical Interface & Features / Interfejs Mechaniczny</h2>
</div>

*   **Primary Suspension (Top Plate):** Center cut-out designed for an integrated F608 flanged bearing carrying an M8 structural threaded rod / dynamic pivot axis.
*   **Internal Drive Partition:** Direct cut-outs for MG996R continuous-rotation/metal-gear servo and brass standoffs for the ESP32 processing unit.
*   **Thermal Management:** Side wall cut-out sized for a passively cooled, finned extruded aluminum heatsink interface.
*   **Acoustic & Environmental Ports:**
    *   Dual offset ePTFE micro-porous acoustic vent membranes (waterproof / vapor-permeable).
    *   Bottom offset M12 IP68 cable gland port for strain-relieved coiled USB-C umbilical harness.
*   **Center-of-Gravity (CoG) Ballast Attachment:** Dual bottom-corner anchor points for M4/M5 eye bolts and carabiner rigging, carrying an external counterweight tactical battery pouch.

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>
*   **Główne Zawieszenie (Górna Płyta):** Środkowe wycięcie zaprojektowane dla zintegrowanego łożyska kołnierzowego F608 opierającego pręt gwintowany M8 / dynamiczną oś obrotu.
*   **Wewnętrzna Przegroda Napędowa:** Bezpośrednie wycięcia pod serwo MG996R z metalową przekładnią i mosiężne dystanse dla jednostki ESP32.
*   **Zarządzanie Termiczne:** Wycięcie w bocznej ściance dostosowane pod pasywnie chłodzony radiator z tłoczonego aluminium.
*   **Porty Akustyczne i Środowiskowe:**
    *   Dwie asymetryczne mikroporowate membrany akustyczne ePTFE (wodoodporne / przepuszczające parę).
    *   Dolny port pod dławnicę kablową M12 (IP68) dla zabezpieczonego spiralnego przewodu zasilającego USB-C.
*   **Balast Środka Ciężkości (CoG):** Dwa dolne punkty kotwiczące pod śruby z uchem M4/M5 i karabińczyki, przenoszące zewnętrzną taktyczną kieszeń na powerbank stanowiącą przeciwwagę.
</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 4. Assembly & Joining Procedures / Procedury Montażu</h2>
</div>

1.  **Edge Preparation:** Remove protective masking along joint interfaces. Clean bonding faces with isopropanol (IPA) or anti-static cleaner.
2.  **Solvent Welding:** Assemble perpendicular joints using capillary-action solvent cement (e.g., Acrifix 116 / 192 or equivalent PMMA solvent). Ensure full chemical cross-linking.
3.  **Internal Fastener Blocks:** Layered internal structural corner blocks ($15 \times 15$ mm, laminated from offcut PMMA) host heat-set brass threaded inserts (M3) for front service-hatch retention.

<details>
<summary>🇵🇱 [Kliknij Trójkąt Po Lewej Stronie Aby Rozwinąć Opis w Języku Polskim]</summary>
1.  **Przygotowanie Krawędzi:** Usuń folię ochronną wzdłuż powierzchni łączeń. Oczyść powierzchnie klejenia izopropanolem (IPA) lub płynem antystatycznym.
2.  **Klejenie Rozpuszczalnikowe:** Złóż złącza prostopadłe używając kleju kapilarnego (np. Acrifix 116 / 192 lub odpowiednika dla PMMA). Upewnij się, że zaszło pełne sieciowanie chemiczne.
3.  **Wewnętrzne Bloki Montażowe:** Warstwowe, wewnętrzne narożne bloki konstrukcyjne ($15 \times 15$ mm, laminowane ze ścinek PMMA) mieszczą wtopione mosiężne gwinty (M3) do mocowania przedniej klapy serwisowej.
</details>

---

<div dir="auto">
<h2 dir="auto">🇺🇸 / 🇵🇱 5. Raw Vector Data (`.svg`)</h2>
</div>

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