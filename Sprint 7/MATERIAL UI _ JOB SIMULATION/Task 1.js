const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const mainContent = document.getElementById('mainContent');
        const cards = [
            document.getElementById('revenueCard'),
            document.getElementById('usersCard'),
            document.getElementById('ordersCard'),
            document.getElementById('profitCard'),
            document.getElementById('performanceChartCard'),
            document.getElementById('topPerformersCard'),
            document.getElementById('allocationChartCard'),
            document.getElementById('marketTrendsCard')
        ];
        const progressBars = document.querySelectorAll('.progress-bar');
        const tabs = document.querySelectorAll('.analytics-tab');

        // Toggle sidebar with overlay
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('visible');
        });

        // Close sidebar when clicking on overlay
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('visible');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);
            
            if (window.innerWidth <= 992 && !isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('visible');
            }
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            // Animate cards
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 100);
            });

            // Animate progress bars
            setTimeout(() => {
                progressBars.forEach(bar => {
                    const targetWidth = bar.parentElement.parentElement.classList.contains('revenue') ? '72%' :
                                      bar.parentElement.parentElement.classList.contains('users') ? '65%' :
                                      bar.parentElement.parentElement.classList.contains('orders') ? '58%' :
                                      '45%';
                    bar.style.width = targetWidth;
                });
            }, 500);

            // Initialize charts
            initCharts();

            // Tab switching
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    // Here you would typically update the chart data based on the selected time period
                    // For this example, we'll just log the selected tab
                    console.log('Selected time period:', tab.dataset.tab);
                });
            });
        });

        // Initialize charts
        function initCharts() {
            // Performance Chart
            const performanceCtx = document.getElementById('performanceChart').getContext('2d');
            const performanceChart = new Chart(performanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: 'Your Portfolio',
                            data: [100000, 105000, 103500, 108200, 112000, 115500, 124780],
                            borderColor: '#4361ee',
                            backgroundColor: 'rgba(67, 97, 238, 0.1)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#4361ee',
                            pointBorderColor: '#ffffff',
                            pointHoverRadius: 6,
                            pointHoverBorderWidth: 2
                        },
                        {
                            label: 'S&P 500',
                            data: [100000, 102500, 101000, 104500, 106000, 107500, 110200],
                            borderColor: '#7209b7',
                            backgroundColor: 'rgba(114, 9, 183, 0.1)',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#7209b7',
                            pointBorderColor: '#ffffff',
                            pointHoverRadius: 6,
                            pointHoverBorderWidth: 2,
                            borderDash: [5, 5]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    family: 'Inter'
                                }
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            titleFont: {
                                family: 'Inter',
                                size: 14,
                                weight: '600'
                            },
                            bodyFont: {
                                family: 'Inter',
                                size: 13
                            },
                            padding: 12,
                            usePointStyle: true,
                            callbacks: {
                                label: function(context) {
                                    return ' ' + context.dataset.label + ': $' + context.raw.toLocaleString();
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                drawBorder: false,
                                color: 'rgba(226, 232, 240, 0.5)'
                            },
                            ticks: {
                                font: {
                                    family: 'Inter'
                                },
                                callback: function(value) {
                                    return '$' + (value / 1000) + 'k';
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    family: 'Inter'
                                }
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 0.5,
                            to: 0.4,
                            loop: false
                        }
                    }
                }
            });

            // Allocation Chart
            const allocationCtx = document.getElementById('allocationChart').getContext('2d');
            const allocationChart = new Chart(allocationCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash', 'Commodities'],
                    datasets: [{
                        data: [45, 20, 15, 12, 8],
                        backgroundColor: [
                            '#4361ee',
                            '#7209b7',
                            '#4cc9f0',
                            '#4ade80',
                            '#ff9e00'
                        ],
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    family: 'Inter'
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            titleFont: {
                                family: 'Inter',
                                size: 14,
                                weight: '600'
                            },
                            bodyFont: {
                                family: 'Inter',
                                size: 13
                            },
                            padding: 12,
                            usePointStyle: true,
                            callbacks: {
                                label: function(context) {
                                    return ' ' + context.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });

            // Market Trends Chart
            const marketTrendsCtx = document.getElementById('marketTrendsChart').getContext('2d');
            const marketTrendsChart = new Chart(marketTrendsCtx, {
                type: 'bar',
                data: {
                    labels: ['Tech', 'Healthcare', 'Finance', 'Energy', 'Consumer', 'Industrial'],
                    datasets: [
                        {
                            label: 'This Month',
                            data: [12, 8, 5, 3, 7, 4],
                            backgroundColor: '#4361ee',
                            borderRadius: 4,
                            borderWidth: 0
                        },
                        {
                            label: 'Last Month',
                            data: [8, 6, 7, 4, 5, 3],
                            backgroundColor: '#4cc9f0',
                            borderRadius: 4,
                            borderWidth: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    family: 'Inter'
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(30, 41, 59, 0.9)',
                            titleFont: {
                                family: 'Inter',
                                size: 14,
                                weight: '600'
                            },
                            bodyFont: {
                                family: 'Inter',
                                size: 13
                            },
                            padding: 12,
                            usePointStyle: true,
                            callbacks: {
                                label: function(context) {
                                    return ' ' + context.dataset.label + ': ' + context.raw + '% return';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false,
                                color: 'rgba(226, 232, 240, 0.5)'
                            },
                            ticks: {
                                font: {
                                    family: 'Inter'
                                },
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                font: {
                                    family: 'Inter'
                                }
                            }
                        }
                    },
                    animation: {
                        delay: function(context) {
                            return context.dataIndex * 100;
                        }
                    }
                }
            });

            // Add resize observers for chart containers
            const chartContainers = document.querySelectorAll('.chart-container');
            chartContainers.forEach(container => {
                const resizeObserver = new ResizeObserver(entries => {
                    if (container.querySelector('#performanceChart')) {
                        performanceChart.resize();
                    } else if (container.querySelector('#allocationChart')) {
                        allocationChart.resize();
                    } else if (container.querySelector('#marketTrendsChart')) {
                        marketTrendsChart.resize();
                    }
                });
                resizeObserver.observe(container);
            });
        }

        // Add hover effect to stats cards
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.02,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });