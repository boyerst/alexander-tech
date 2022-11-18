export const barOneVariants = {
  open: {
    y: [0, 10, 10, 10, 10],
    rotate: [0, 0, 0, 45, 45],
  },
  closed: {
    y: [10, 10, 0, 0, 0],
  },
}

export const barTwoVariants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
}

export const barThreeVariants = {
  open: {
    y: [0, -10, -10, -10, -10],
    rotate: [0, 0, 0, -45, -45],
  },
  closed: {
    y: [-10, -10, 0, 0, 0],
  },
}

export const menuList = {
  open: {
    x: 0,
  },
  closed: {
    x: "calc(var(--menuWidth) * -1)",
  },
}

// export const subMenuNavVariants = {
//   open: {
//     opacity: 1,
//     height: "auto",
//   },
//   closed: {
//     opacity: 0,
//     height: 0,
//   },
// }


export const subMenuNavVariants = {
  open: () => ({ 
    visibility: "visible",
    height: "auto", 
    opacity: 1, 
    transition: {
      height: {
        duration: .5,
      },
      opacity: {
        duration: 1,
        delay: .2
      }
    }
  }),
  closed: () => ({ 
    visibility: "hidden", 
    height: 0, 
    opacity: 0,  
    transition: {
      // delay: 2,
      height: {
        duration: .8,
      }
    }
  })
}






