// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Deploy animation function
function deployAnimation() {
    const deployStatus = document.getElementById('deployStatus');
    const button = event.target.closest('.btn');
    
    // Animate button
    button.classList.add('deploy-animate');
    
    // Update deploy status with animation
    deployStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Deploying...</span>';
    deployStatus.style.color = '#f59e0b';
    
    setTimeout(() => {
        deployStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>Deployed Successfully</span>';
        deployStatus.style.color = '#10b981';
        button.classList.remove('deploy-animate');
        
        // Show success message
        showNotification('Deployment completed successfully!', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        header.style.background = 'rgba(15, 15, 35, 0.95)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and tech items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .tech-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add random deployment time to make it feel more realistic
    const deployTimes = ['2.3s', '1.8s', '3.1s', '2.7s'];
    const randomTime = deployTimes[Math.floor(Math.random() * deployTimes.length)];
    
    // Update code block with random values occasionally
    setInterval(() => {
        const codeLines = document.querySelectorAll('.code-line');
        if (codeLines.length > 1) {
            const nameValue = `"terraform-challenge-${Math.floor(Math.random() * 1000)}"`;
            codeLines[1].innerHTML = `&nbsp;&nbsp;<span class="code-property">name</span> = <span class="code-string">${nameValue}</span>`;
        }
    }, 10000);
});

// Add typing effect to code block
function typeCode() {
    const codeContent = document.querySelector('.code-content');
    const originalHTML = codeContent.innerHTML;
    codeContent.innerHTML = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        codeContent.innerHTML = originalHTML.substring(0, i);
        i++;
        if (i > originalHTML.length) {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeCode, 1000);
});

