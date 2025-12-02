const Footer = () => {
    return (
        <div className="flex justify-start px-1 py-2 w-full max-w-4xl mx-auto gap-3 text-sm opacity-60">
            <div className="flex gap-2 justify-center items-center">
                <div className="relative py-1 px-2 bg-typing-surface dark:bg-typing-surface-dark rounded overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-35"
                        style={{
                            backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
                repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
                repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px),
                repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px)
            `,
                            backgroundSize: '16px 16px, 16px 16px, 8px 8px, 8px 8px'
                        }}
                    />
                    <span className="relative z-10">Tab</span>
                </div>
                To Restart
            </div>
            <div className="flex gap-2 justify-center items-center">
                <div className="relative py-1 px-2 bg-typing-surface dark:bg-typing-surface-dark rounded overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-35"
                        style={{
                            backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
                repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(100,116,139,.08) 8px, rgba(100,116,139,.08) 16px),
                repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px),
                repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(51,65,85,.12) 4px, rgba(51,65,85,.12) 8px)
            `,
                            backgroundSize: '16px 16px, 16px 16px, 8px 8px, 8px 8px'
                        }}
                    />
                    <span className="relative z-10">Click</span>
                </div>
                Screen To Gain Focus
            </div>
        </div>
    )
}

export default Footer