tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0768B5',
                skyblue: '#2F9FF8',
                opacity: '#072D4B',
                mainbg: '#F4F9F8',
                menu: 'rgba(42, 61, 39, 0.1)',
                amberblack: '#072D4B',
                pink: '#FF8C8C',
            },
            spacing: {
                '4/10': '42%',
                '0.3': '3%'
              },
            inset: {
                '0.5': '1px',
                '12px': '-12px',
                '120px': '120px',
            },
            width: {
                '0.3': '3px',
                '70': '70px'
            },
            fontSize: {
                '17': ['17px', {
                    lineHeight: '20px',
                    fontWeight: '400',
                }],
            },
            animation: {
                view: 'view 0.8s',
                hide: 'hide 0.8s',
            },
            keyframes: {
                view: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': {transform: 'translateY(25%)'},
                    '100%': { transform: 'translateY(0)' },
                },
                hide: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-25%)' },
                }
            }
        }
    }
}
