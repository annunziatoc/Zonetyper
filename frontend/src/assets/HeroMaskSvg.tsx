const HeroMaskSvg = ({className = ""}) => {
    return (
        <svg
            className={className}
            width="0"
            height="0"
        >
            <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                    <path d="M0 0.082 C0 0.064 0.008 0.049 0.018 0.049 H0.38 C0.394 0.049 0.408 0.038 0.418 0.02 C0.425 0.007 0.435 0 0.445 0 H0.554 C0.565 0 0.575 0.007 0.583 0.02 C0.596 0.038 0.611 0.049 0.626 0.049 H0.982 C0.992 0.049 1 0.064 1 0.082 V0.933 C1 0.951 0.992 0.966 0.982 0.966 H0.888 C0.884 0.966 0.88 0.969 0.876 0.975 L0.866 0.991 C0.863 0.997 0.859 1 0.854 1 H0.179 C0.175 1 0.17 0.997 0.167 0.991 L0.159 0.977 C0.156 0.97 0.152 0.966 0.147 0.966 H0.018 C0.008 0.966 0 0.951 0 0.933 V0.082 Z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default HeroMaskSvg