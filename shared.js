function renderNav(activePage) {
    const navItems = [
        { id: 'map', icon: 'map', label: 'Map', href: 'index.html' },
        { id: 'history', icon: 'history', label: 'History', href: 'history.html' },
        { id: 'impact', icon: 'eco', label: 'Impact', href: 'result.html' }
    ];
    document.getElementById('bottomNav').innerHTML = navItems.map(item => {
        const isActive = activePage === item.id;
        const classes = isActive 
            ? 'bg-primary dark:bg-primary-dark text-white dark:text-slate-900 rounded-full shadow-md'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark';
        return `<a href="${item.href}" class="flex flex-col items-center justify-center ${classes} px-6 py-2 transition-all duration-300 ease-out">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span class="font-['Inter'] text-[11px] font-medium tracking-wide">${item.label}</span>
        </a>`;
    }).join('');
}
