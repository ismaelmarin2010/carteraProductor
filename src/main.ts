import "./css/reset.css";
import "./css/variables.css";
import "./css/global.css";
import "./css/components.css";
import "./css/pages.css";

import { ROUTES } from "./constants/ui";
import { getAppElement } from "./utils/dom";
import { createAppLayout } from "./components/layout/AppLayout";
import { createLoginPage } from "./pages/login/LoginPage";
import { createDashboardPage } from "./pages/dashboard/DashboardPage";
import { createClientsPage } from "./pages/clients/ClientsPage";
import { createClientFormPage } from "./pages/clients/ClientFormPage";
import { createPoliciesPage } from "./pages/policies/PoliciesPage";
import {
  getSession,
  login
} from "./services/auth/authService";
import {
  createClient,
  getClients
} from "./services/clients/clientService";

const app = getAppElement();

function navigateTo(path: string): void {
  window.history.pushState({}, "", path);
  render();
}

function render(): void {
  const session = getSession();
  const currentPath = window.location.pathname;

  if (!session && currentPath !== ROUTES.login) {
    navigateTo(ROUTES.login);
    return;
  }

  if (session && currentPath === ROUTES.login) {
    navigateTo(ROUTES.dashboard);
    return;
  }

  app.innerHTML = "";

  if (!session) {
    renderLogin();
    return;
  }

  switch (currentPath) {
    case ROUTES.dashboard:
      renderDashboard(session.user.name);
      break;

    case ROUTES.clients:
      renderClients();
      break;

    case ROUTES.newClient:
      renderClientForm();
      break;

    case ROUTES.policies:
      renderPolicies();
      break;

    default:
      navigateTo(ROUTES.dashboard);
  }
}

function renderLogin(): void {
  const page = createLoginPage({
    onLoginSuccess: (credentials) => {
      login(credentials);
      navigateTo(ROUTES.dashboard);
    }
  });

  app.appendChild(page);
}

function renderDashboard(userName: string): void {
  const page = createDashboardPage({
    userName
  });

  app.appendChild(
    createAppLayout({
      userName,
      content: page
    })
  );
}

function renderClients(): void {
  const page = createClientsPage({
    clients: getClients(),
    onCreateClient: () => {
      render();
    }
  });

  const session = getSession();

  if (!session) {
    return;
  }

  app.appendChild(
    createAppLayout({
      userName: session.user.name,
      content: page
    })
  );
}

function renderClientForm(): void {
  const session = getSession();

  if (!session) {
    return;
  }

  const page = createClientFormPage({
    onSubmit: (input) => {
      createClient(input);
      navigateTo(ROUTES.clients);
    }
  });

  app.appendChild(
    createAppLayout({
      userName: session.user.name,
      content: page
    })
  );
}

function renderPolicies(): void {
  const session = getSession();

  if (!session) {
    return;
  }

  const page = createPoliciesPage();

  app.appendChild(
    createAppLayout({
      userName: session.user.name,
      content: page
    })
  );
}

window.addEventListener("popstate", render);

render();