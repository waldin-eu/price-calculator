(() => {
  const bruttoEl = document.getElementById('brutto');
  const vatEl = document.getElementById('vat');
  const discountEl = document.getElementById('discount');
  const resultEl = document.getElementById('result');
  const calcBtn = document.getElementById('calcBtn');
  const resetBtn = document.getElementById('resetBtn');

  const round2 = (n) => (Math.round((n + Number.EPSILON) * 100) / 100).toFixed(2);

  function calculate() {
    const brutto = parseFloat(bruttoEl.value);
    const vat = parseFloat(vatEl.value) || 0;
    const discount = parseFloat(discountEl.value) || 0;

    if (!Number.isFinite(brutto)) {
      resultEl.textContent = '€ —';
      return;
    }

    // Final = brutto / ((100 + VAT)/100) * ((100 - discount)/100)
    const finalPrice = brutto / ((100 + vat) / 100) * ((100 - discount) / 100);

    resultEl.textContent = `€ ${round2(finalPrice)}`;
  }

  function reset() {
    bruttoEl.value = '';
    vatEl.value = '';
    discountEl.value = '';
    resultEl.textContent = '€ —';
    bruttoEl.focus();
  }

  // Resets on every load
  reset();

  // Button actions
  calcBtn.addEventListener('click', calculate);
  resetBtn.addEventListener('click', reset);

  // Optional: calculate on Enter
  [bruttoEl, vatEl, discountEl].forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') calculate();
    });
  });
})();
