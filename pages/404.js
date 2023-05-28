import Layout from "../components/layout"
import Link from "next/link"

function Page404() {
  return (
    <Layout
        title="Página no encontrada"
        description="Error 404">
        <p className="error">Página no encontrada</p>
        <Link href="/"
        className="error-enlace">
            Volver al inicio
        </Link>
        </Layout>
  )
}

export default Page404