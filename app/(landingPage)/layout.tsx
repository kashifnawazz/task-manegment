import { Navbar } from "./_components/navbar";

const LandingPageLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
     
       <div className="bg-body-blue">
           
         
                <Navbar/>
                {children}
             
             </div>
            
       
    );
};

export default LandingPageLayout;