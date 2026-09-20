const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root element was not found.");
}

app.innerHTML = `
  <main>
    <h1>Gestión de Seguros</h1>
    <p>La aplicación está funcionando correctamente.</p>
  </main>
`;