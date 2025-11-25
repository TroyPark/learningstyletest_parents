// MBTI 질문 데이터 (E/I, S/N, T/F, J/P 각 3문항씩)
const questions = [
    // E vs I (외향 vs 내향)
    {
        question: "시험 기간, 우리 아이의 공부 스타일은?",
        options: [
            { text: "친구들과 함께 공부하는 걸 더 좋아해요 📢", type: "E" },
            { text: "혼자 조용히 집중하는 걸 선호해요 🏠", type: "I" }
        ]
    },
    {
        question: "모르는 문제가 생겼을 때 우리 아이는?",
        options: [
            { text: "바로 친구나 가족에게 물어보고 이야기해요 💬", type: "E" },
            { text: "혼자 고민하고 스스로 해결하려고 해요 🔍", type: "I" }
        ]
    },
    {
        question: "공부하다가 쉬는 시간이 생기면?",
        options: [
            { text: "친구들과 소통하며 에너지를 얻어요 📱", type: "E" },
            { text: "혼자만의 시간을 가지며 재충전해요 🎧", type: "I" }
        ]
    },
    
    // S vs N (감각 vs 직관)
    {
        question: "새로운 개념을 배울 때 우리 아이는?",
        options: [
            { text: "구체적인 예시와 실습을 통해 이해해요 📝", type: "S" },
            { text: "전체적인 개념과 큰 그림을 먼저 파악해요 🌐", type: "N" }
        ]
    },
    {
        question: "노트 정리할 때 우리 아이의 스타일은?",
        options: [
            { text: "순서대로 꼼꼼하게 정리해요 📚", type: "S" },
            { text: "창의적으로 연결하여 자유롭게 정리해요 ✨", type: "N" }
        ]
    },
    {
        question: "공부 계획을 세울 때 우리 아이는?",
        options: [
            { text: "구체적인 분량과 목표를 정확히 정해요 ✅", type: "S" },
            { text: "큰 틀만 정하고 유연하게 조절해요 🎯", type: "N" }
        ]
    },
    
    // T vs F (사고 vs 감정)
    {
        question: "성적이 안 나왔을 때 우리 아이는?",
        options: [
            { text: "원인을 분석하고 논리적으로 대처해요 📊", type: "T" },
            { text: "감정적으로 힘들어하고 위로가 필요해요 😢", type: "F" }
        ]
    },
    {
        question: "우리 아이의 공부 동기는 주로?",
        options: [
            { text: "구체적인 목표나 성과 달성이에요 🎓", type: "T" },
            { text: "칭찬이나 인정, 격려예요 💕", type: "F" }
        ]
    },
    {
        question: "그룹 과제를 할 때 우리 아이는?",
        options: [
            { text: "효율적인 역할 분담과 결과를 중시해요 🔧", type: "T" },
            { text: "팀 분위기와 조화를 먼저 생각해요 🤝", type: "F" }
        ]
    },
    
    // J vs P (판단 vs 인식)
    {
        question: "시험 한 달 전, 우리 아이의 모습은?",
        options: [
            { text: "미리 계획을 세우고 차근차근 준비해요 📅", type: "J" },
            { text: "나중에 몰아서 하는 편이에요 ⏰", type: "P" }
        ]
    },
    {
        question: "우리 아이의 스케줄 관리 방식은?",
        options: [
            { text: "규칙적인 루틴을 선호해요 ⏱️", type: "J" },
            { text: "그때그때 상황에 따라 유연하게 해요 🎪", type: "P" }
        ]
    },
    {
        question: "공부하다가 궁금한 게 생기면?",
        options: [
            { text: "메모해두고 계획을 먼저 마무리해요 📋", type: "J" },
            { text: "바로 찾아보고 호기심을 따라가요 🐰", type: "P" }
        ]
    }
];

// 자녀 성향별 학부모 역할 데이터
const results = {
    INTJ: {
        emoji: "🎯",
        title: "아이에게 전략적 가이드를 제공하는 부모",
        description: "우리 아이는 독립적이고 전략적인 사고를 가진 아이입니다. 스스로 계획을 세우고 실행하는 걸 좋아하며, 논리적인 설명을 중요하게 여깁니다. 완벽주의 성향이 강해 스트레스를 받을 수 있어요.",
        methods: [
            "아이의 장기 목표 설정을 함께 논의하고 지지해주세요",
            "감정적 표현보다 논리적 근거로 대화하세요",
            "독립적인 학습 공간과 시간을 충분히 제공하세요",
            "완벽주의로 인한 스트레스를 이해하고 실패도 괜찮다고 알려주세요",
            "아이의 아이디어와 계획을 존중하고 개입을 최소화하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 깊이 있는 개념 탐구와 전략적 학습 로드맵을 제공하세요"
        ]
    },
    INTP: {
        emoji: "🤔",
        title: "아이의 호기심을 촉진 시키는 부모",
        description: "우리 아이는 탐구심이 강하고 원리를 이해하길 좋아합니다. 창의적이고 분석적이지만, 실천력이 부족할 수 있어요. 관심사에 깊이 빠지면 놀라운 집중력을 보입니다.",
        methods: [
            "아이의 '왜?'라는 질문을 환영하고 함께 탐구하세요",
            "이론적 토대를 먼저 이해할 시간을 주세요",
            "실천 계획은 구체적으로 함께 세워주세요",
            "관심 분야에 대한 자료와 기회를 제공하세요",
            "결과보다 과정과 사고 방식을 칭찬해주세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 호기심 기반 맞춤 커리큘럼과 실천력 코칭을 제공하세요"
        ]
    },
    ENTJ: {
        emoji: "👑",
        title: "아이의 리더십을 효율적으로 지원하는 부모",
        description: "우리 아이는 타고난 리더십을 가지고 있으며 목표 지향적입니다. 효율성과 성과를 중시하고, 다른 사람들을 이끄는 걸 즐깁니다. 때로는 너무 강하게 밀어붙여 스트레스를 받을 수 있어요.",
        methods: [
            "명확한 목표와 기대치를 함께 설정하세요",
            "리더십 경험 기회를 제공하세요 (스터디 그룹, 프로젝트)",
            "효율성을 인정하되, 과정의 중요성도 알려주세요",
            "가끔은 쉬는 것도 전략이라고 가르쳐주세요",
            "타인의 감정을 배려하는 방법을 함께 배워가세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 목표 달성 중심의 효율적 학습 전략과 리더십 코칭을 제공하세요"
        ]
    },
    ENTP: {
        emoji: "🎪",
        title: "아이의 생각을 유연하게 코칭하는 부모",
        description: "우리 아이는 창의적이고 논쟁을 즐기는 토론가입니다. 다양한 아이디어가 넘치지만, 집중력과 실행력이 부족할 수 있어요. 새로운 것에 대한 호기심이 많습니다.",
        methods: [
            "토론과 논쟁을 긍정적으로 받아들이세요",
            "다양한 학습 방법을 시도할 수 있도록 지원하세요",
            "하나를 완성하는 것의 가치를 함께 경험하세요",
            "짧은 집중 시간부터 시작해 점차 늘려가세요",
            "창의적 아이디어를 인정하되, 실행 계획도 함께 세우세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 창의적 사고 확장과 집중력 향상 프로그램을 제공하세요"
        ]
    },
    INFJ: {
        emoji: "🌙",
        title: "아이를 정서적으로 공감하고 이해하는 부모",
        description: "우리 아이는 통찰력이 있고 깊이 있는 사고를 합니다. 의미와 가치를 중시하며, 완벽주의 성향이 있어요. 감수성이 풍부하고 타인을 잘 이해합니다.",
        methods: [
            "아이의 내면 세계와 가치관을 존중해주세요",
            "조용하고 안정적인 환경을 제공하세요",
            "의미 있는 목표와 비전을 함께 그려보세요",
            "완벽주의로 인한 번아웃을 주의하세요",
            "정서적 지지와 깊은 대화 시간을 가지세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 가치 중심 심층 학습과 정서적 안정 기반 맞춤 교육을 제공하세요"
        ]
    },
    INFP: {
        emoji: "🌸",
        title: "아이의 감성을 이해하고 지원하는 부모",
        description: "우리 아이는 창의적이고 감수성이 풍부한 이상주의자입니다. 자신의 가치관과 일치하는 것에는 열정적이지만, 그렇지 않으면 동기부여가 어려워요.",
        methods: [
            "아이의 감정과 가치관을 깊이 이해하고 존중하세요",
            "관심사와 학습을 연결시켜 의미를 부여하세요",
            "창의적인 표현 방법을 격려하세요",
            "강요보다는 내적 동기를 끌어내세요",
            "작은 목표를 함께 세우고 성취감을 느끼게 하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 관심사 기반 맞춤 커리큘럼과 내적 동기 부여 코칭을 제공하세요"
        ]
    },
    ENFJ: {
        emoji: "✨",
        title: "아이의 사회적 활동을 지원하는 부모",
        description: "우리 아이는 타인을 돕고 조화를 중시하는 따뜻한 리더입니다. 공감 능력이 뛰어나고 다른 사람의 성장을 돕는 것에서 기쁨을 느낍니다. 때로는 자신을 희생할 수 있어요.",
        methods: [
            "협력 학습과 그룹 활동 기회를 제공하세요",
            "타인을 돕는 행동을 칭찬하되, 자기 관리도 중요하다고 알려주세요",
            "리더십과 소통 능력을 발전시킬 기회를 주세요",
            "자신의 감정과 필요도 표현하도록 격려하세요",
            "긍정적인 피드백과 인정을 자주 해주세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 공감 능력을 활용한 학습 전략과 자기 돌봄 코칭을 제공하세요"
        ]
    },
    ENFP: {
        emoji: "🎨",
        title: "아이의 열정을 함께 격려하는 부모",
        description: "우리 아이는 열정적이고 창의적인 자유로운 영혼입니다. 새로운 것에 호기심이 많고 재미를 추구하지만, 집중력과 끈기가 부족할 수 있어요.",
        methods: [
            "다양한 경험과 활동을 제공하세요",
            "재미있는 학습 방법을 함께 찾아보세요",
            "열정을 인정하되, 완성의 중요성도 알려주세요",
            "짧은 목표를 설정하고 보상 시스템을 활용하세요",
            "창의성을 격려하고 긍정적인 에너지를 지지하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 흥미 중심 다양한 학습법과 과제 완성 능력을 키워주세요"
        ]
    },
    ISTJ: {
        emoji: "📚",
        title: "아이의 계획을 체계적으로 지원하는 부모",
        description: "우리 아이는 책임감이 강하고 체계적입니다. 규칙과 루틴을 중시하며 성실하게 일을 완수합니다. 안정적이고 신뢰할 수 있지만, 변화에 스트레스를 받을 수 있어요.",
        methods: [
            "명확한 규칙과 일관된 루틴을 제공하세요",
            "체크리스트와 계획표를 함께 만들어보세요",
            "성실함과 책임감을 인정하고 칭찬하세요",
            "새로운 시도도 안전하다는 것을 보여주세요",
            "구체적이고 실용적인 목표를 설정하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 체계적인 학습 루틴과 단계별 목표 달성 프로그램을 제공하세요"
        ]
    },
    ISFJ: {
        emoji: "📖",
        title: "아이의 노력을 세심하게 격려하는 부모",
        description: "우리 아이는 성실하고 세심하며 타인을 배려합니다. 꼼꼼하고 책임감이 강하지만, 자신의 필요를 뒤로 미룰 수 있어요. 안정과 조화를 중시합니다.",
        methods: [
            "아이의 노력과 헌신을 구체적으로 인정하세요",
            "안정적이고 따뜻한 환경을 조성하세요",
            "완벽주의를 내려놓고 '충분히 좋다'를 알려주세요",
            "자신의 의견도 중요하다는 것을 격려하세요",
            "변화는 천천히, 단계적으로 접근하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 안정적 환경에서 꼼꼼한 학습 지도와 자기표현 코칭을 제공하세요"
        ]
    },
    ESTJ: {
        emoji: "⏰",
        title: "아이를 체계적으로 관리하는 부모",
        description: "우리 아이는 조직적이고 실용적입니다. 효율성과 결과를 중시하며, 명확한 규칙과 구조를 선호합니다. 리더십이 있지만, 융통성이 부족할 수 있어요.",
        methods: [
            "명확한 기대치와 목표를 설정하세요",
            "시간 관리와 조직 능력을 인정하세요",
            "구체적인 피드백과 평가를 제공하세요",
            "융통성과 다른 관점의 가치를 알려주세요",
            "리더십 기회를 제공하되, 협력의 중요성도 강조하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 효율적인 시간 관리 전략과 리더십 개발 프로그램을 제공하세요"
        ]
    },
    ESFJ: {
        emoji: "🤗",
        title: "아이의 사회적 활동을 함께 소통·협력하는 부모",
        description: "우리 아이는 사교적이고 협력적입니다. 타인의 인정과 조화를 중시하며, 그룹 활동을 선호합니다. 분위기에 민감하고 배려심이 많아요.",
        methods: [
            "스터디 그룹이나 협력 학습 기회를 제공하세요",
            "긍정적인 피드백과 격려를 자주 해주세요",
            "사회적 활동과 학습을 연결하세요",
            "독립적인 학습 능력도 길러주세요",
            "아이의 배려와 협력을 구체적으로 칭찬하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 긍정적 피드백 기반 맞춤 학습과 자기주도성을 키워주세요"
        ]
    },
    ISTP: {
        emoji: "🔧",
        title: "아이에게 현실적인 지원을 하는 부모",
        description: "우리 아이는 실용적이고 논리적입니다. 실습과 경험을 통해 배우는 것을 선호하며, 문제 해결을 즐깁니다. 독립적이지만 감정 표현이 서툴 수 있어요.",
        methods: [
            "실습과 체험 중심의 학습 기회를 제공하세요",
            "문제 해결 과정을 존중하고 시간을 주세요",
            "독립성을 인정하고, 통제없이 필요시 지원을 제공하세요",
            "개념과 실전의 균형을 맞춰주세요",
            "감정 표현을 강요하지 말고 자연스럽게 유도하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 실습 중심 문제 해결 학습과 개념 이해를 균형있게 제공하세요"
        ]
    },
    ISFP: {
        emoji: "🎵",
        title: "아이의 예술적 감각을 지원하는 부모",
        description: "우리 아이는 감성적이고 예술적입니다. 자신만의 속도로 배우고, 시각적·감각적 학습을 선호합니다. 자유로운 환경에서 창의성을 발휘합니다.",
        methods: [
            "시각 자료와 다양한 감각을 활용한 학습을 지원하세요",
            "창의적인 표현 방법을 격려하세요",
            "아이만의 속도와 스타일을 존중하세요",
            "강요보다는 부드러운 격려로 이끌어주세요",
            "예술적·창의적 활동을 학습과 연결하세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 감각 활용 맞춤 학습법과 자기 표현력을 키워주세요"
        ]
    },
    ESTP: {
        emoji: "⚡",
        title: "아이의 활동적 에너지를 함께 나누는 부모",
        description: "우리 아이는 에너지가 넘치고 행동 지향적입니다. 실전과 경험을 통해 빠르게 배우며, 지루함을 못 참습니다. 즉각적인 결과를 선호합니다.",
        methods: [
            "짧고 집중적인 학습 시간을 설정하세요",
            "실습과 게임 형식의 학습을 제공하세요",
            "경쟁과 도전을 통해 동기를 부여하세요",
            "움직임과 활동을 학습에 통합하세요",
            "장기 계획의 중요성을 경험으로 알려주세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 활동 중심 역동적 학습과 장기 계획 능력을 키워주세요"
        ]
    },
    ESFP: {
        emoji: "🎉",
        title: "아이의 재미와 창의성을 함께 만들어가는 부모",
        description: "우리 아이는 긍정적이고 사교적입니다. 재미와 즐거움을 추구하며, 사람들과 함께하는 것을 좋아합니다. 순간을 즐기지만 계획성이 부족할 수 있어요.",
        methods: [
            "재미있고 흥미로운 학습 방법을 찾아주세요",
            "짧은 목표와 즉각적인 보상을 활용하세요",
            "그룹 활동과 협력 학습 기회를 제공하세요",
            "긍정적인 에너지를 인정하고 격려하세요",
            "꾸준함의 가치를 재미있게 가르쳐주세요",
            "<strong><span class='highlight-text'>1:1 맞춤 학습</span></strong>을 통해 재미있는 학습 경험과 지속 가능한 학습 습관을 제공하세요"
        ]
    }
};

let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question').textContent = question.question;
    
    const optionsHtml = question.options.map((option, index) => 
        `<button class="option-btn" onclick="selectOption('${option.type}')">${option.text}</button>`
    ).join('');
    
    document.getElementById('options').innerHTML = optionsHtml;
}

function selectOption(type) {
    scores[type]++;
    currentQuestion++;
    
    // 모바일에서 버튼 포커스 제거
    if (document.activeElement) {
        document.activeElement.blur();
    }
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('loadingSection').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    
    // 결과 타입 계산
    const styleType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
    
    // 영상 미리 로드 시작
    const characterVideo = characterVideos[styleType];
    const characterVideoElement = document.getElementById('resultCharacter');
    const videoUrl = `https://troypark.github.io/learningstyletestsource_parents/character_card/${characterVideo}`;
    
    // 로딩 시작 시간 기록
    const loadingStartTime = Date.now();
    const minLoadingTime = 3000; // 최소 3초
    let resultShown = false;
    
    // 결과 표시 함수 (중복 방지)
    const displayResult = () => {
        if (!resultShown) {
            resultShown = true;
            showResult();
        }
    };
    
    // 영상 로드 시작
    characterVideoElement.src = videoUrl;
    characterVideoElement.alt = `${styleType} 캐릭터 영상`;
    
    // 최소 3초 후 결과 표시
    setTimeout(() => {
        displayResult();
    }, minLoadingTime);
    
    // 영상 로드 완료 시에도 최소 시간 확인
    characterVideoElement.onload = () => {
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = minLoadingTime - elapsedTime;
        
        if (remainingTime > 0) {
            // 아직 최소 시간이 지나지 않았으면 남은 시간만큼 대기
            setTimeout(() => {
                displayResult();
            }, remainingTime);
        } else {
            // 이미 3초가 지났으면 즉시 표시 (하지만 위의 setTimeout이 이미 처리했을 수 있음)
            displayResult();
        }
    };
    
    characterVideoElement.onerror = () => {
        // 로드 실패해도 최소 시간 확인
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = minLoadingTime - elapsedTime;
        
        if (remainingTime > 0) {
            setTimeout(() => {
                displayResult();
            }, remainingTime);
        } else {
            displayResult();
        }
    };
}

// MBTI 유형별 캐릭터 영상 파일명 매핑
const characterVideos = {
    INTJ: '01_INTJ_부엉이_학부모용_애니메이션.webp',
    INTP: '02_INTP_여우_학부모용_애니메이션.webp',
    ENTJ: '03_ENTJ_사자_학부모용_애니메이션.webp',
    ENTP: '04_ENTP_앵무새_학부모용_애니메이션.webp',
    INFJ: '05_INFJ_늑대_학부모용_애니메이션.webp',
    INFP: '06_INFP_판다_학부모용_애니메이션.webp',
    ENFJ: '07_ENFJ_돌고래_학부모용_애니메이션.webp',
    ENFP: '08_ENFP_강아지_학부모용_애니메이션.webp',
    ISTJ: '09_ISTJ_비버_학부모용_애니메이션.webp',
    ISFJ: '10_ISFJ_코끼리_학부모용_애니메이션.webp',
    ESTJ: '11_ESTJ_곰_학부모용_애니메이션.webp',
    ESFJ: '12_ESFJ_토끼_학부모용_애니메이션.webp',
    ISTP: '13_ISTP_고양이_학부모용_애니메이션.webp',
    ISFP: '14_ISFP_사슴_학부모용_애니메이션.webp',
    ESTP: '15_ESTP_호랑이_학부모용_애니메이션.webp',
    ESFP: '16_ESFP_원숭이_학부모용_애니메이션.webp'
};

function showResult() {
    const styleType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
    
    const result = results[styleType];
    
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('loadingSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    // 영상은 이미 showLoading()에서 로드됨
    document.getElementById('resultDescription').textContent = result.description;
    
    const methodsHtml = result.methods.map(method => `<li>${method}</li>`).join('');
    document.getElementById('studyMethods').innerHTML = methodsHtml;
}

// 공유하기 함수 (Web Share API 사용)
function shareResult() {
    const styleType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
    const result = results[styleType];
    const title = result.title;
    const description = document.getElementById('resultDescription').textContent;
    const url = window.location.href.split('?')[0];
    
    // 공유 텍스트 작성 (URL 포함)
    const shareText = `👨‍👩‍👧‍👦 우리 자녀 성향 테스트 결과\n\n` +
        `맞춤 학부모 역할: "${title}"\n\n` +
        `${description}\n\n` +
        `여러분도 자녀 성향을 확인해보세요! 👇\n` +
        url;
    
    const shareData = {
        title: '우리 자녀 성향 테스트 결과',
        text: shareText
    };
    
    // Web Share API 지원 여부 확인
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => {
                console.log('공유 성공!');
                // 네이버 애널리틱스 이벤트 전송
                if (typeof wcs !== 'undefined' && wcs.event) {
                    wcs.event('(parents)공유', '공유횟수', title);
                }
                // Google Analytics 이벤트 전송
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'share', {
                        'method': 'Web Share API',
                        'content_type': 'parents_test_result',
                        'item_id': title
                    });
                }
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    console.log('공유 실패:', error);
                    fallbackShare(shareText, title);
                }
            });
    } else {
        // Web Share API를 지원하지 않는 경우 텍스트 복사
        fallbackShare(shareText, title);
    }
}

// Web Share API를 지원하지 않는 경우 텍스트 복사
function fallbackShare(shareText, title) {
    navigator.clipboard.writeText(shareText).then(() => {
        alert('✅ 결과가 복사되었습니다!\n카카오톡이나 메시지에 붙여넣기해서 친구들에게 공유해보세요 😊');
        // 네이버 애널리틱스 이벤트 전송
        if (typeof wcs !== 'undefined' && wcs.event) {
            wcs.event('(parents)공유', '공유횟수', title);
        }
        // Google Analytics 이벤트 전송
        if (typeof gtag !== 'undefined') {
            gtag('event', 'share', {
                'method': 'Clipboard',
                'content_type': 'parents_test_result',
                'item_id': title
            });
        }
    }).catch(() => {
        // 클립보드 API도 지원하지 않는 경우
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('✅ 결과가 복사되었습니다!\n카카오톡이나 메시지에 붙여넣기해서 친구들에게 공유해보세요 😊');
            // 네이버 애널리틱스 이벤트 전송
            if (typeof wcs !== 'undefined' && wcs.event) {
                wcs.event('(parents)공유', '공유횟수', title);
            }
            // Google Analytics 이벤트 전송
            if (typeof gtag !== 'undefined') {
                gtag('event', 'share', {
                    'method': 'execCommand',
                    'content_type': 'parents_test_result',
                    'item_id': title
                });
            }
        } catch (err) {
            alert('공유 기능을 사용할 수 없습니다.');
        }
        document.body.removeChild(textArea);
    });
}

// 에이닷 홈페이지 방문 추적
function trackAdotVisit() {
    // 네이버 애널리틱스 이벤트 전송
    if (typeof wcs !== 'undefined' && wcs.event) {
        wcs.event('(parents)홈페이지유입', '유입횟수');
    }
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('startSection').style.display = 'block';
}
