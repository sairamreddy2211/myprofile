interface HamburgerProps{ 
  handleClick:React.FC
}
const Hamburger: React.FC<HamburgerProps>  = ({handleClick}) =>{ 
    return ( 
      <div className="flex flex-col items-end justify-between w-9 gap-2" onClick={handleClick} >
        <div className="border-[0.7px] w-full "></div>
        <div className="border-[0.7px] w-full w-[80%]"></div>
        <div className="border-[0.7px] w-full w-[50%]"></div>
      </div>
    )
}

export default Hamburger;