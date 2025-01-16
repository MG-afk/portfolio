export default function Footer() {
    let year = new Date().getFullYear();

    return(
        <footer>
            &copy; Michal Gabrys {year}
        </footer>
    );
}