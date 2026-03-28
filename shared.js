function renderNav(activePage) {
    const navItems = [
        { id: 'map', icon: 'map', label: 'Map', href: 'index.html' },
        { id: 'history', icon: 'history', label: 'History', href: 'history.html' },
        { id: 'impact', icon: 'eco', label: 'Impact', href: 'result.html' }
    ];
    document.getElementById('bottomNav').innerHTML = navItems.map(item => {
        const isActive = activePage === item.id;
        const classes = isActive 
            ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full'
            : 'text-slate-400 dark:text-slate-500 hover:text-green-600 dark:hover:text-green-400';
        return `<a href="${item.href}" class="flex flex-col items-center justify-center ${classes} px-5 py-2 transition-all duration-300 ease-out">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span class="font-['Inter'] text-[11px] font-medium tracking-wide">${item.label}</span>
        </a>`;
    }).join('');
}
