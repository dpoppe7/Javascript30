const projects = {
    'drum-kit': {
        title: '🥁 JavaScript Drum Kit',
        desc: 'Play drums with your keyboard! Each key triggers different drum sounds with visual feedback.',
        code: '../01 - Drum Kit',
        demo: '../01 - Drum Kit/index.html'
    },
    'clock': {
        title: '🕐 Analog Clock',
        desc: 'A beautiful real-time clock that updates every second with smooth hand movements.',
        code: '../02 - Clock',
        demo: '../02 - Clock/index.html'
    },
    'css-vars': {
        title: '🎨 CSS Variables with JS',
        desc: 'Control CSS properties like spacing, blur, and color using JavaScript and range inputs.',
        code: '../03 - CSS Variable',
        demo: '../03 - CSS Variable/index.html'
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').textContent = project.desc;
    document.getElementById('code-link').href = project.code;
    document.getElementById('demo-link').href = project.demo;
    
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});