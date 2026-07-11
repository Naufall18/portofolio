import { useLang } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <div className="wrap">
        <div className="fi">
          <span className="fl">Naufal<em>.</em>Dwi</span>
          <span className="ft">{t.footer.copyright}</span>
          <span className="ft">{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
