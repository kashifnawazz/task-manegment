interface SideBarItemsProps {
    label: string;
    href?: string;
    onClick?: () => void;
    
}


const SidebarItems: React.FC<SideBarItemsProps> = ({ 
    label,
    href,
    onClick
}) => {
       
    return (
        <div className=" flex flex-row items-center">

        </div>
    );
}

export default SidebarItems;