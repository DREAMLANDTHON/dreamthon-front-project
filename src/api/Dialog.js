export async function getDialogAnswer(question) {
    const req = JSON.stringify({
        text: question
    });

    return fetch("/api/dialogflow/textQuery", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: req,
    })
        .then(res => res.json());
}

// export async function getGptAnswer(question) {
//     const req = JSON.stringify(
//         {
//             question: question + "이 질문에 대한 답을 간결하게 답변해줘"
//         }
//     );
//
//     console.log(req);
//
//     return fetch("/api/chat", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },
//         body: req,
//     }).then(res => res.json());
// }

export async function getGptAnswer(question) {
    const req = JSON.stringify(
        {
            systemContent: "20대 여성의 말투로 대답해줘",
            userContent: question
        }
    );

    console.log(req);

    const data = await fetch("http://165.229.86.126:9500/consulting/chat", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: req,
    })
        .then(res => res.json())
        .then(data => data.data);

    const result = {
        "question": question,
        "answer": data
    }

    return result;
}

