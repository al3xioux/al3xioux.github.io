let openbar = document.getElementById('sidebaropen');
        let closebar = document.getElementById('sidebarclose');
        let sidebar = document.getElementById('hidden')
        let header = document.getElementById('header')

        function closeSidebar() {
            sidebar.style.display = 'none'
            header.style.display = 'flex'
            document.body.classList.remove('no-scroll');
        }
        function openSidebar() {
            sidebar.style.display = 'flex'
            header.style.display = 'none'
            document.body.classList.add('no-scroll');
        }

        openbar.addEventListener('click', openSidebar);
        closebar.addEventListener('click', closeSidebar);
