import FooterComponent from "../Components/Footer";
import ProvAsidePerfil from "../components/ProvAsidePerfil";
import TenantDashboard from "../Components/TenantDashboard";

export default function TenantHome() {
  return (
    <div id="perfil">
      <TenantDashboard />
      <ProvAsidePerfil/>
      <FooterComponent/>
    </div>
  );
}