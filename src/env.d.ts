/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_APP_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
