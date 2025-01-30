document.addEventListener('DOMContentLoaded', function() {
    // AOSアニメーションの初期化
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // 研究業績データ
    const publications = [
        {
            "title": "DNA配列から選択圧下にある\"機能的\"オープンクロマチン領域を予測する方法とその応用",
            "authors": "Tomizuka, Koido, Suzuki et al.",
            "journal": "bioRxiv",
            "year": "2024",
            "note": "（査読前プレプリント）",
            "role": "共同筆頭・責任著者",
            "link": "#"
        },
        {
            "title": "DNA配列から転写を予測する機械学習法に関する総説",
            "authors": "Koido et al.",
            "journal": "J Hum Genet",
            "year": "2024",
            "note": "論文(レビュー)",
            "role": "筆頭・共同責任著者",
            "link": "#"
        },
        {
            "title": "遺伝型imputationの推定精度のバイアスとその原因に関する研究",
            "authors": "Shi et al.",
            "journal": "Brief Bioinform",
            "year": "2024",
            "note": "論文",
            "role": "共同責任著者",
            "link": "#"
        },
        {
            "title": "ファーマコゲノミクスにおけるポリジェニックモデルと機械学習の応用に関する総説",
            "authors": "Koido et al.",
            "journal": "Br J Clin Pharmacol",
            "year": "2023",
            "note": "論文(レビュー)",
            "role": "筆頭・責任著者",
            "link": "#"
        },
        {
            "title": "MENTR: DNA配列機械学習による非翻訳RNA発現予測",
            "authors": "Koido et al.",
            "journal": "Nat Biomed Eng",
            "year": "2023",
            "note": "論文",
            "role": "筆頭著者",
            "link": "https://www.nature.com/articles/s41551-023-01075-5"
        }
    ];

    // 研究業績の動的な追加
    const publicationList = document.querySelector('.publication-list');
    if (publicationList) {
        publications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-item';
            pubElement.setAttribute('data-aos', 'fade-up');
            
            pubElement.innerHTML = `
                <h3 class="h5 mb-3">${pub.title}</h3>
                <p class="mb-2">${pub.authors}</p>
                <p class="mb-2">
                    ${pub.journal} (${pub.year}) 
                    ${pub.note ? `<span class="text-muted">${pub.note}</span>` : ''}
                    ${pub.role ? `<span class="badge bg-secondary ms-2">${pub.role}</span>` : ''}
                </p>
                ${pub.link !== "#" ? `<a href="${pub.link}" class="btn btn-sm btn-outline-light" target="_blank">論文を読む</a>` : ''}
            `;
            
            publicationList.appendChild(pubElement);
        });
    }

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ナビゲーションバーのアクティブ状態の更新
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 