export default function Footer() {
    return (
        <footer style={{
            borderTop: '3px solid black',
            marginTop: '48px',
            padding: '32px 0',
            backgroundColor: 'white',
            textAlign: 'center'
        }}>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', margin: 0, color: 'black' }}>
                © {new Date().getFullYear()} Solarpunk Corps. Built for the future.
            </p>
        </footer>
    );
}
