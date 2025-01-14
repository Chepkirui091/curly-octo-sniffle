import Image from "next/image";
import logoImg from "../../public/static/logo.png";

export const Logo = ({ variant }: { variant?: string }) => {
    return (
        <div
            className={`bg-white flex items-center justify-center px-4 py-4 rounded-md w-full ${
                variant === "compact" ? "w-32" : "w-40"
            }`}
        >
            <Image src={logoImg} alt="Logo" width={variant === "compact" ? 100 : 150} />
        </div>
    );
};
