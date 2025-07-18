const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
