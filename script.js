const projectsData = [
    {
        year: "2024",
        name: "校园二手交易平台",
        tech: ["Vue.js", "Node.js", "MongoDB"],
        description: "全栈Web应用，为校内学生提供便捷的二手物品发布与交易功能，实现用户认证、商品搜索等核心模块。"
    },
    {
        year: "2023",
        name: "学习笔记管理系统",
        tech: ["React", "Firebase"],
        description: "响应式SPA，用于分类、标记和搜索个人学习笔记，利用Firebase实现实时数据同步。"
    },
    {
        year: "2023",
        name: "天气信息仪表盘",
        tech: ["JavaScript", "Chart.js"],
        description: "调用第三方API获取数据，使用图表库可视化未来一周的温度与降水趋势。"
    },
    {
        year: "2022",
        name: "图书馆书籍查询工具",
        tech: ["Python", "Flask", "SQLite"],
        description: "通过爬虫获取学校图书馆书籍在馆状态，并将数据存储于本地数据库供查询。"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('projectsContainer');

    projectsData.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';

        const techHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        card.innerHTML = `
            <div class="project-year">${project.year}</div>
            <h3 class="project-name">${project.name}</h3>
            <div class="project-tech">${techHTML}</div>
            <p class="project-desc">${project.description}</p>
        `;

        container.appendChild(card);
    });

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});