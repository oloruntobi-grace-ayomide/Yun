import Footer from './Footer'
import Navbar from './Navbar'

function Layout( { children } ){

    return(
          
        <div className="layout-container flex flex-col">
            <Navbar/>
            <main className="content-body flex-grow">
                { children }
            </main>
            <Footer/>
           
        </div>
    )
}

export default Layout