
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


// ======== Conditiona rendaring option-02 ======//
export default function Todo ({task, IsDone}) {
    if(IsDone === true){
        return <li>Finnised: {task} </li>
    }else{
        return <li>work on: {task} </li>
    }
}

// == Conditiona rendaring option-02 else shortcut

// // ======== Conditiona rendaring option-02 ======//
// export default function Todo ({task, IsDone}) {
//     if(IsDone === true){
//         return <li>Finnised: {task} </li>
//     }
//      return <li>work on: {task} </li>
//  
// }


