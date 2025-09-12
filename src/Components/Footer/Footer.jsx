import {  RiFacebookFill, RiInstagramFill, RiTwitterFill } from "@remixicon/react"


const Footer = () => {
    return (
        <footer className="container mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">

                <div className="flex space-x-6 mb-2">
                    <a
                     href="https://www.facebook.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="visit facebook"
                     >
                        <RiFacebookFill/>
                     </a>
                
                
                    <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="visit twitter"
                    >
                        <RiTwitterFill/>
                    </a>
            
        
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="visit instagram"
                    >
                        <RiInstagramFill />
                    </a>

               </div>
               <div>
                    <p className="text-sm">Copyright &copy; 2025. All rights reserved</p>    
               </div>
            </div>        
        </footer>
    )
}

export default Footer
