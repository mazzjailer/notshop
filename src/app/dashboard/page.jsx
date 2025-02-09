import { permanentRedirect } from "next/navigation";

const DashboardPage = () => {
  permanentRedirect('/dashboard/profile')
}

export default DashboardPage
