const seatOrder = [
    '한유진', '한윤지', '김정아', '김정현',
    '이도연', '강하영', '정유진', '김해냄', '정기준', '표후동',
    '정선민', '양하은', '유민성', '전욱진', '이현우',
    '박진', '김효인', '강성원', '임소정', '안치호'
]

fetch('http://192.168.10.28:5000/hancom/김정현/users', {
    headers: { 'Authorization': 'HANCOM' }
})
.then(response => response.json())
.then(students => {
    const ordered = seatOrder.map(name => students.find(s => s.name === name))
    const desks = document.querySelectorAll('.desk')
    desks.forEach((desk, index) => {
        desk.textContent = ordered[index].name
    })
})

// fetch('http://192.168.10.28:5000/hancom/김정현/users', {
//         headers: { 'Authorization': 'HANCOM' }
//     })
//     .then(response => response.json())
//     .then(students => {
//         console.log('Students:', students)
//     })

// (async () => {
//     const res = await fetch('http://192.168.10.28:5000/hancom/김정현/users/23', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'HANCOM'
//         },
//         body: JSON.stringify({ id: 4 })
//     })
//     console.log(await res.json())
// })()


// (async () => {
//     const badIds = [4, 9, 10, 12, 21, 22]

//     for (const id of badIds) {
//         const res = await fetch(`http://192.168.10.28:5000/hancom/김정현/users/${id}`, {
//             method: 'DELETE',
//             headers: { 'Authorization': 'HANCOM' }
//         })
//         console.log(await res.json())
//     }
// })()

// (async () => {
//     const pairs = [[24, 9], [25, 10], [26, 12]]

//     for (const [oldId, newId] of pairs) {
//         const res = await fetch(`http://192.168.10.28:5000/hancom/김정현/users/${oldId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'HANCOM'
//             },
//             body: JSON.stringify({ id: newId })
//         })
//         console.log(await res.json())
//     }
// })()


// 정상 명단 : 강성원 · 강하영 · 김정아 · 김정현 · 김해냄 · 김효인 · 박진 · 안치호 · 양하은 · 유민성 · 이도연 · 이현우 · 임소정 · 전욱진 · 정기준 · 정선민 · 정유진 · 표후동 · 한유진 · 한윤지