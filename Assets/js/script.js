
function calculateAreaCube() {

    const ladocubo = document.getElementById("ladocubo").value;
    const area = 6 * ladocubo * ladocubo;
    document.getElementById("rescubo").textContent = `A área do cubo é: ${area}`;

  }
  
 
  function calculateAreaCuboid() {

    const compcuboide = document.getElementById("compcuboide").value;
    const largcuboide = document.getElementById("largcuboide").value;
    const altcuboide = document.getElementById("altcuboide").value;
    const area = 2 * (compcuboide * largcuboide + compcuboide * altcuboide + largcuboide * altcuboide);
    document.getElementById("rescuboide").textContent = `A área do cubóide é: ${area}`;

  }
  

  function calculateAreaRectangle() {

    const baseretangulo = document.getElementById("baseretangulo").value;
    const altretangulo = document.getElementById("altretangulo").value;
    const area = baseretangulo * altretangulo;
    document.getElementById("resretangulo").textContent = `A área do retângulo é: ${area}`;

  }
  

  function calculateAreaTrapezoid() {

    const bmaiortrapezio = document.getElementById("bmaiortrapezio").value;
    const bmenortrapezio = document.getElementById("bmenortrapezio").value;
    const alttrapezio = document.getElementById("alttrapezio").value;
    const area = ((parseFloat(bmaiortrapezio) + parseFloat(bmenortrapezio)) * alttrapezio) / 2;
    document.getElementById("restrapezio").textContent = `A área do trapézio é: ${area}`;

  }
  

  function calculateAreaRhombus() {

    const dmaiorromboedro = document.getElementById("dmaiorromboedro").value;
    const dmenorromboedro = document.getElementById("dmenorromboedro").value;
    const area = 0.5 * dmaiorromboedro * dmenorromboedro;
    document.getElementById("resromboedro").textContent = `A área do romboedro é: ${area}`;

  }
  

  document.getElementById("bcubo").addEventListener("click", calculateAreaCube);

  document.getElementById("bcuboide").addEventListener("click", calculateAreaCuboid);

  document.getElementById("bretangulo").addEventListener("click", calculateAreaRectangle);

  document.getElementById("btrapezio").addEventListener("click", calculateAreaTrapezoid);
  
  document.getElementById("bromboedro").addEventListener("click", calculateAreaRhombus);
  