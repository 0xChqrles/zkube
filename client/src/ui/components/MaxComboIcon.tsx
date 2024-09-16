const MaxComboIcon = ({
  className,
  width = 26,
  height = 26
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="scale(1.02)">
      <path
        d="M18.8601 0.745414C18.8601 0.333806 19.1933 0 19.6056 0C22.8994 0 25.5689 2.66952 25.5689 5.96332C25.5689 9.25712 22.8994 11.9266 19.6056 11.9266C16.3118 11.9266 13.6422 9.25712 13.6422 5.96332C13.6422 4.29545 14.3285 2.78599 15.4322 1.70374C15.7261 1.41582 16.1976 1.42048 16.4865 1.71445C16.7753 2.00866 16.7707 2.48083 16.4748 2.76968C15.6462 3.58032 15.1331 4.71242 15.1331 5.96332C15.1331 8.4325 17.1154 10.4358 19.6056 10.4358C22.0747 10.4358 24.078 8.4325 24.078 5.96332C24.078 3.74804 22.4661 1.90756 20.351 1.55256V2.23624C20.351 2.64855 20.0179 2.98166 19.6056 2.98166C19.1933 2.98166 18.8601 2.64855 18.8601 2.23624V0.745414Z"
        fill="currentColor"
      />
      <path
        d="M17.1341 3.49408L17.1363 3.49182C17.4635 3.16807 18.0096 3.15069 18.3321 3.49715L20.1876 5.35263C20.5353 5.67804 20.5565 6.22578 20.192 6.54976C19.868 6.91426 19.3203 6.8931 18.9949 6.54534L17.1394 4.68986C16.7929 4.36736 16.8103 3.82131 17.1341 3.49408Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.56 4.70577C11.7094 3.72983 10.818 2.80702 9.88584 1.93223C9.5152 1.58535 8.94023 1.58059 8.56959 1.92747C6.35526 3.98024 4.48306 6.31337 3.15731 8.55146C1.84582 10.7563 1 12.9849 1 14.8096C1 20.8728 5.67576 26 11.644 26C17.5457 26 22.288 20.8776 22.288 14.8143C22.288 14.2103 22.1681 13.497 21.9539 12.7251C21.2183 12.9805 20.4282 13.1192 19.6055 13.1192C15.6531 13.1192 12.4496 9.91576 12.4496 5.96327C12.4496 5.53437 12.4875 5.11413 12.56 4.70577ZM14.994 20.4404C13.9914 21.1057 12.927 21.4383 11.7248 21.4383C8.7264 21.4383 6.322 19.5091 6.31725 16.2541C6.31725 14.8238 7.12505 13.5503 8.73115 11.5308C9.03527 11.1507 9.60548 11.1554 9.90484 11.5356C10.7031 12.5477 12.1049 14.3296 12.889 15.3275C13.1836 15.7029 13.749 15.7124 14.0627 15.3513L15.2601 13.959C15.569 13.5979 16.1154 13.6264 16.3293 14.054C17.5315 16.2493 16.9945 19.0434 14.994 20.4404Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default MaxComboIcon;