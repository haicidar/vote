import { TypeOrmModuleOptions } from "@nestjs/typeorm";

class ConfigService {
	constructor(private env: { [key: string]: string | undefined }) { }

	private getValue(key: string, throwOnMissing = true): string {
		const value = this.env[key];
		if (!value && throwOnMissing) {
			throw new Error(`config error - missing env.${key}`);
		}

		return value;
	}

	public getTypeOrmConfig(): TypeOrmModuleOptions {
		return {
			type: 'mysql',

			host: this.getValue('MYSQL_HOST'),
			port: parseInt(this.getValue('MYSQL_PORT')),
			username: this.getValue('MYSQL_USER'),
			password: this.getValue('MYSQL_PASSWORD'),
			database: this.getValue('MYSQL_DATABASE'),


			migrationsTableName: 'migration',

			migrations: ['src/migration/*.ts'],
		};
	}
}

const configService = new ConfigService(process.env);
export { configService };