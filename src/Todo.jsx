
// ======== Conditiona rendaring option-01 ======//

// export default function Todo ({task, IsDone}) {

//     return(
//         <li>Task: {task} </li>
//     )
// }


// export default function Todo ({task, IsDone}) {
//     if(IsDone === true){
//         return <li>Finnised: {task} </li>
//     }else{
//         return <li>work on: {task} </li>
//     }
// }


// // ======== Conditiona rendaring option-02 ======//
// export default function Todo ({task, IsDone}) {
//     if(IsDone === true){
//         return <li>Finised: {task} </li>
//     }else{
//         return <li>work on: {task} </li>
//     }
// }

// == Conditiona rendaring option-02 else shortcut

// // ======== Conditiona rendaring option-02 ======//
// export default function Todo ({task, IsDone}) {
//     if(IsDone === true){
//         return <li>Finnised: {task} </li>
//     }
//      return <li>work on: {task} </li>
//  
// }


// // Conditiona rendaring option-03 tarnury oparetor
// export default function Todo ({task, IsDone}) {

//     return(
//         <li> {IsDone ? 'finish' : 'work on'} : {task} </li>
//     )
// }



// // // Conditiona rendaring option-04 && and
// export default function Todo ({task, IsDone}) {
//     return(
//         <li>{task} {IsDone && ': Done'} </li>
//     )
// }



// // // Conditiona rendaring option-05 || or
// export default function Todo ({task, IsDone}) {
//     return(
//         <li>{task} {IsDone || ': Do it'} </li>
//     )
// }


// // // Conditiona rendaring option-06 with variable declare
export default function Todo ({task, IsDone}) {

   let listItem;
   
   if(IsDone){
    listItem = <li>Finish: {task}</li>
   }else{
    listItem = <li>Work on: {task}</li>
   }
   return listItem;
}
