import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function Layout() {

    const { loadFromStorage } = useAppStore()

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
      <>
          {/* Renders the header for all the pages inside the <Route element={<Layout />} /> component in routes.tsx */}
          {/* so you don't have to add the header on each page (there can be more components than the Header). */}
          <Header />

          {/* Outlet component renders the content of the pages inside the <Route element={<Layout />} /> component */}
          {/* The content of each page will show depending on the route path you are on. */}
          <main className="container mx-auto py-16">
              <Outlet />
          </main>

          <Modal />
      </>
    )
}
