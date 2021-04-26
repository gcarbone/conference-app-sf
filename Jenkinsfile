pipeline {
    agent master
    stages {
        stage('build') {
            steps {
                sh 'pwd'
                sh 'npm --version'
                sh 'echo "Hello World!!!!"'
            sh '''
                echo "Multiline shell steps works too"
                ls -lah
            '''
            }
            
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}