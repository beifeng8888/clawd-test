// 项目数据
const projectsData = [
    {
        year: "2024",
        name: "校园二手交易平台",
        tech: ["Vue.js", "Node.js", "Express", "MongoDB", "RESTful API"],
        description: "设计并开发了一个全栈Web应用，为校内学生提供便捷的二手物品发布与交易功能。实现了用户认证、商品搜索、即时消息通知等核心模块。"
    },
    {
        year: "2023",
        name: "个人学习笔记管理系统",
        tech: ["React", "Firebase", "Material-UI"],
        description: "构建了一个响应式SPA，用于分类、标记和搜索个人学习笔记。利用Firebase进行实时数据同步与用户身份验证。"
    },
    {
        year: "2023",
        name: "天气信息仪表盘",
        tech: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
        description: "一个简洁的天气信息展示页面，通过调用第三方API获取数据，并使用图表库可视化未来一周的温度与降水趋势。"
    },
    {
        year: "2022",
        name: "图书馆书籍查询工具",
        tech: ["Python", "Flask", "BeautifulSoup", "SQLite"],
        description: "开发了一个命令行工具及简易Web界面，通过爬虫获取学校图书馆的书籍在馆状态，并将数据存储于本地数据库供查询。"
    }
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 动态生成项目卡片
    const projectsContainer = document.getElementById('projectsContainer');

    projectsData.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        // 创建技术标签HTML
        const techTagsHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

        projectCard.innerHTML = `
            <div class="project-year">${project.year}</div>
            <h3 class="project-name">${project.name}</h3>
            <div class="project-tech">
                ${techTagsHTML}
            </div>
            <p class="project-desc">${project.description}</p>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // 2. 更新页脚年份
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. 简单的平滑滚动（可选增强交互）
    const contactLinks = document.querySelectorAll('a[href^="#"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 30,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});